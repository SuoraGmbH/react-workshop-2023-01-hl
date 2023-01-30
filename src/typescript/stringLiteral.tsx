function sayGoodMorning(country: Languages) {
    return <i>{localization[country]}</i>;
}

type Languages = keyof typeof localization

const localization = {
    de: "Guten Morgen",
    nl: "Goedemorgen",
    en: "Good morning",
};

export const element = <h1>{sayGoodMorning("nl")}, Sara!</h1>;
