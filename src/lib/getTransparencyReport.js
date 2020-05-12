const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  "appRfyVnS31QfWePY"
);

export default function getTransparencyReport() {
  const totalRecords = [];

  return new Promise((resolve, reject) => {
    base("Relatório de Transparência")
      .select({
        fields: ["Propósito", "Data", "Valor"],
        sort: [{ field: "Data", direction: "asc" }],
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
