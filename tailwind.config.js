module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "river-styx": "#121823",
                "bright-greek": "#3C43EE",
            },
        },
    },
    // eslint-disable-next-line global-require
    plugins: [require("@tailwindcss/forms")],
};
