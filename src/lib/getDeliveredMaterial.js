const getConfig = require("next/config").default;
const Airtable = require("airtable");

const { serverRuntimeConfig } = getConfig();
const base = new Airtable({ apiKey: serverRuntimeConfig.airtableApiKey }).base(
  "appRfyVnS31QfWePY"
);

export default function getDeliveredMaterial() {
  let total = 0;

  return new Promise((resolve, reject) => {
    base("Necessidades")
      .select({
        fields: ["Necessidade Real"],

        filterByFormula: "{Estado} = 'Entregue'",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach((record) => {
            const value = record.get("Necessidade Real") || 0;
            const numbersInValue = value.match(/\d+/g).map(Number);

            numbersInValue.forEach((number) => {
              total += number;
            });
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
