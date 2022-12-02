import vl from 'vega-lite-api'

export const viz = vl.markpoint({
    fill: true,
    stroke: false,
    size: 900,
    opacity: 0.2
    })
    .encode(
        vl.x().fieldQ('acceleration'.scale({zero: false})),
        vl.y().fieldQ('horsepower').scale({zero: false}),
        vl.tooltip().fieldN('name')
    )