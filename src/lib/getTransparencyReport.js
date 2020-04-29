const getConfig = require("next/config").default;
const Airtable = require("airtable");

const { serverRuntimeConfig } = getConfig();
const base = new Airtable({ apiKey: serverRuntimeConfig.airtableApiKey }).base(
  "appRfyVnS31QfWePY"
);

export default function getTransparencyReport() {
  const totalRecords = [];

  return new Promise((resolve, reject) => {
    base("Relatório de Transparência")
      .select({
        fields: ["Propósito", "Data", "Valor"],
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach((record) => {
            const purpose = record.get("Propósito");
            const date = record.get("Data");
            const value = record.get("Valor");

            if (!purpose || !date || !value) return;

            totalRecords.push({
              purpose,
              date,
              value,
            });
          });

          fetchNextPage();
        },
        function done(err) {
          if (err) return reject(err);

          return resolve(totalRecords);
        }
      );
  });
}
