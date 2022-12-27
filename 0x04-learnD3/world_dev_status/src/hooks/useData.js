const tsvUrl = 'https://unpkg.com/world-atlas@1.1.4/world/50m.tsv'
const jsonUrl = 'https://unpkg.com/world-atlas@1.1.4/world/50m.json'

const useData = () =>
    Promise.all([
        d3.tsv(tsvUrl),
        d3.json(jsonUrl)
    ])
    .then(([tsvData, topoJSONdata]) => {
        const rowById = tsvData.reduce((accumulator, d) => {
            accumulator[d.iso_n3] = d
            return accumulator
        }, {})

        const countries = topojson.feature(topoJSONdata, topoJSONdata.objects.countries)

        countries.features.forEach(d => {
            Object.assign(d.properties, rowById[d.id])
        })
    
        return countries
    })

export default useData