(() => {
    enum AudioLevel {
        min = 1,
        medium,
        max = 10
    }

    enum enumeracion {
        a=10,
        b,
        c=9,
        d
    }

    let currentAudio:AudioLevel = AudioLevel.max

    let enumValue: enumeracion = enumeracion.d

    console.log({currentAudio});
    console.log({AudioLevel});
    console.log({enumValue});
})()