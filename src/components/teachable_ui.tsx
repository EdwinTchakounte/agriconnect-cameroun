import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Upload } from "lucide-react";

declare global {
  interface Window {
    tmImage: any;
  }
}

export default function TeachableUploader() {
  const MODEL_URL = "https://teachablemachine.withgoogle.com/models/AyzVmL4dV/";
  const [model, setModel] = useState<any>(null);
  const [predictions, setPredictions] = useState<any[]>([]);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error" | null>(null);

  // Charger le modèle
  useEffect(() => {
    const loadModel = async () => {
      try {
        setStatus("loading");
        const modelURL = MODEL_URL + "model.json";
        const metadataURL = MODEL_URL + "metadata.json";
        const loadedModel = await window.tmImage.load(modelURL, metadataURL);
        setModel(loadedModel);
        setStatus("ready");
      } catch (err) {
        console.error("Erreur lors du chargement du modèle:", err);
        setStatus("error");
      }
    };
    loadModel();
  }, []);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!model) return;
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (ev.target?.result) {
        const src = ev.target.result as string;
        setImageSrc(src);
        predictImage(src);
      }
    };
    reader.readAsDataURL(file);
  };

  const predictImage = async (src: string) => {
    if (!model) return;
    const img = new Image();
    img.src = src;
    img.onload = async () => {
      try {
        setStatus("loading");
        const prediction = await model.predict(img);
        setPredictions(prediction);
        setStatus("ready");
      } catch (err) {
        console.error("Erreur de prédiction:", err);
        setStatus("error");
      }
    };
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6 space-y-6">
      <motion.h1
        className="text-3xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Teachable Machine Upload Demo
      </motion.h1>

      {/* Indicateur de statut */}
      {status === "loading" && (
        <p className="text-blue-600 font-medium">⏳ Chargement en cours...</p>
      )}
      {status === "ready" && (
        <p className="text-green-600 font-medium">✅ Modèle prêt</p>
      )}
      {status === "error" && (
        <p className="text-red-600 font-medium">
          ❌ Impossible de charger le modèle. Vérifie l’URL ou ta connexion.
        </p>
      )}

      {/* Bouton Upload */}
      <label>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleUpload}
          disabled={!model}
        />
        <div className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition cursor-pointer">
          <Upload className="w-5 h-5" />
          <span>Charger une Image</span>
        </div>
      </label>

      {/* Zone d’affichage */}
      <div className="w-full max-w-2xl grid md:grid-cols-2 gap-6">
        <div className="flex justify-center items-center p-4 min-h-[320px] rounded-2xl shadow bg-white">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Uploaded"
              className="rounded-lg shadow-md max-h-72"
            />
          ) : (
            <p className="text-gray-500">Charge une image pour commencer</p>
          )}
        </div>

        {/* Résultats */}
        <div className="p-4 rounded-2xl shadow bg-white">
          <h2 className="text-xl font-semibold mb-4">Prédictions</h2>
          <div className="space-y-2">
            {predictions.length > 0 ? (
              predictions.map((p, i) => (
                <motion.div
                  key={i}
                  className="flex justify-between bg-gray-100 p-2 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <span>{p.className}</span>
                  <span>{(p.probability * 100).toFixed(1)}%</span>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-400">Aucune prédiction encore</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
