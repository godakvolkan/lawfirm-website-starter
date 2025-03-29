import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        mode: "dark", // Dark mode'u aktif eder
        primary: {
            main: "#90caf9", // Açık mavi tonları (Primary color)
        },
        secondary: {
            main: "#f48fb1", // Pembe tonları (Secondary color)
        },
        background: {
            default: "#121212", // Sayfa arka planı
            paper: "#1e1e1e", // Kart ve benzeri bileşenler için arka plan
        },
        text: {
            primary: "#ffffff", // Beyaz metin
            secondary: "#b0bec5", // Açık gri metin
        },
    },
});

export default darkTheme;
