/* Unused for now */
const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  "appRfyVnS31QfWePY"
);

export default function getTotalDonations() {
  let total = 0;

  return new Promise((resolve, reject) => {
    base("Relatório de Transparência")
      .select({
        fields: ["Valor"],
        view: "Relatório de Transparência",
        filterByFormula: "{Propósito} = 'Doação'",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach((record) => {
            const value = record.get("Valor") || 0;

            total += value;
          });

          fetchNextPage();
        },
        function done(err) {
          if (err) return reject(err);

          return resolve(total);
        }
      );
  });
}
