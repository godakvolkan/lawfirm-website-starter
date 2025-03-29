import React from "react";
import { useParams } from "react-router-dom";

const hukukVerileri = {
  "ceza-hukuku": "Ceza Hukuku hakkında detaylı bilgi...",
  "aile-hukuku": "Aile Hukuku hakkında detaylı bilgi...",
  "tazminat-hukuku": "Tazminat Hukuku hakkında detaylı bilgi...",
  "gayrimenkul-hukuku": "Gayrimenkul ve Kira Hukuku hakkında detaylı bilgi...",
};

const HukukDetay = () => {
  const { hukukAdi } = useParams();
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{hukukAdi.replace("-", " ")}</h1>
      <p>{hukukVerileri[hukukAdi] || "Bu hukuk alanı hakkında bilgi bulunmamaktadır."}</p>
    </div>
  );
};

export default HukukDetay;
