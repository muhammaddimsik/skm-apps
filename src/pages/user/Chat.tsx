import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import NameForm from "./NameForm";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import EducationRadio from "./EducationRadio";
import Options from "./Options";
import Header from "./Header";
import Loader from "@/components/Loader";

const Chat: React.FC = () => {
  const opening = [
    {
      id: 1,
      text: "Hai",
    },
    {
      id: 2,
      text: "Selamat datang di SI SEPAT (SISTEM INFORMASI SURVEI ELEKTRONIK KEPUASAN MASYARAKAT) DARI BADAN PERENCANAAN PEMBANGUNAN DAERAH OGAN ILIR 2021",
    },
    {
      id: 3,
      text: "Pemerintah dan dunia usaha sangat membutuhkan informasi unit pelayanan instansi pemerintah secara rutin. Untuk itu BAPPEDA Ogan Ilir menyajikan INDEKS KEPUASAN MASYARAKAT secara rutin, yang diharapkan mampu memberikan gambaran mengenai kualitas pelayanan di instansi pemerintah kepada masyarakat. Indeks tersebut diperoleh berdasarkan pendapat masyarakat, yang dikumpulkan melalui SURVEI KEPUASAN MASYARAKAT TERHADAP UNIT PELAYANAN PUBLIK. Survei ini MENANYAKAN PENDAPAT masyarakat, mengenai pengalaman dalam memperoleh pelayanan instansi pemerintah atas penyelenggaraan pelayanan. PERTANYAAN SENGAJA DIRANCANG SESEDERHANA MUNGKIN, untuk tidak mengambil waktu Bapak/Ibu/Saudara yang sangat berharga. Pendapat Bapak/Ibu/Saudara akan sangat membantu keberhasilan survey ini sebagai dasar penyusunan indeks kepuasan masyarakat dalam upaya peningkatan mutu pelayanan instansi pemerintah kepada masyarakat. Jawaban hanya dipergunakan untuk kepentingan survey. Atas perhatian dan partisipasinya, disampaikan terima kasih",
    },
    {
      id: 4,
      text: "Silahkan isi namanya...",
    },
  ];

  const [isLoading, setIsLoading] = useState(0);
  const [name, setName] = useState("");

  setTimeout(() => {
    setIsLoading(1);
  }, 1500);

  const handleChoose = (n: number) => {
    setTimeout(() => {
      setIsLoading(n);
    }, 1500);
  };

  return (
    <>
      <Header />
      <div className="p-[2rem]">
        <div className="text-start">
          {isLoading == 1 ? (
            opening.map((item) => (
              <Badge key={item.id} className="mb-1 leading-relaxed">
                {item.text}
              </Badge>
            ))
          ) : (
            <Loader />
          )}
        </div>
        <Button variant="outline">Mulai</Button>
        {isLoading == 2 ? <NameForm setName={setName} /> : <Loader />}
        <div className="text-start mt-3">
          <Badge className="mb-1 leading-relaxed">Jenis Kelamin</Badge>
        </div>
        <RadioGroup className="flex justify-center text-center mt-4">
          <div className="">
            <RadioGroupItem
              value="laki-laki"
              id="laki-laki"
              className="hidden"
            />
            <Label
              className="border rounded-full border-primary px-4 py-2"
              htmlFor="laki-laki"
            >
              Laki-laki
            </Label>
          </div>
          <div className="">
            <RadioGroupItem
              value="perempuan"
              id="perempuan"
              className="hidden"
            />
            <Label
              className="border rounded-full border-primary px-4 py-2"
              htmlFor="perempuan"
            >
              Perempuan
            </Label>
          </div>
        </RadioGroup>
        <div className="text-start mt-3">
          <Badge className="mb-1 leading-relaxed">Pendidikan</Badge>
        </div>
        <RadioGroup className="flex justify-center flex-wrap text-center">
          <EducationRadio value="sd" label="SD" />
          <EducationRadio value="smp" label="SMP" />
          <EducationRadio value="sma" label="SMA/SMK" />
          <EducationRadio value="d3" label="D3" />
          <EducationRadio value="s1" label="S1" />
          <EducationRadio value="s2" label="S2" />
          <EducationRadio value="s3" label="S3" />
        </RadioGroup>
        <div className="text-start mt-3">
          <Badge className="mb-1 leading-relaxed">
            Instansi Penyelenggara Pelayanan
          </Badge>
        </div>
        <RadioGroup className="flex justify-center flex-wrap text-center">
          <EducationRadio value="dpmptsp" label="DPM PTSP" />
          <EducationRadio value="dishub" label="DISHUB" />
        </RadioGroup>
        <div className="text-start mt-3">
          <Badge className="mb-1 leading-relaxed">
            Jenis Layanan yang diterima
          </Badge>
        </div>
        <RadioGroup className="flex justify-center flex-wrap text-center">
          <EducationRadio value="prakerja" label="Pembuatan Kartu Prakerja" />
          <EducationRadio value="visa" label="Pembuatan Kartu Visa" />
        </RadioGroup>
        <div className="text-start mt-3">
          <Badge className="mb-1 leading-relaxed">
            Bagaimana pendapat kamu tentang kesesuaian perssyaratan pelayanan
            dengan jenis pelayanannya
          </Badge>
          <Badge className="mb-1 leading-relaxed">
            Keterangan: 1. Tidak Sesuai, 2. Kurang Sesuai, 3. Sesuai, 4. Sangat
            Sesuai
          </Badge>
        </div>
        <Options />
        <div className="text-start mt-3">
          <Badge className="mb-1 leading-relaxed">
            Bagaimana pemahaman kamu tentang kemudahan pelayanan di unit ini
          </Badge>
          <Badge className="mb-1 leading-relaxed">
            Keterangan: 1. Tidak Sesuai, 2. Kurang Sesuai, 3. Sesuai, 4. Sangat
            Sesuai
          </Badge>
        </div>
        <Options />
        <div className="text-start mt-3">
          <Badge className="mb-1 leading-relaxed">
            Bagaimana pendapat kamu tentang kecepatan waktu dalam memberikan
            pelayanan
          </Badge>
          <Badge className="mb-1 leading-relaxed">
            Keterangan: 1. Tidak Sesuai, 2. Kurang Sesuai, 3. Sesuai, 4. Sangat
            Sesuai
          </Badge>
        </div>
        <Options />
        <div className="text-start mt-3">
          <Badge className="mb-1 leading-relaxed">
            Bagaimana pendapatan kamu tentang kewajaran biaya/tarif dalam
            pelayanan
          </Badge>
          <Badge className="mb-1 leading-relaxed">
            Keterangan: 1. Tidak Sesuai, 2. Kurang Sesuai, 3. Sesuai, 4. Sangat
            Sesuai
          </Badge>
        </div>
        <Options />
        <div className="text-start mt-3">
          <Badge className="mb-1 leading-relaxed">
            Bagaimana pendapat kamu tnentang kesesuaian standar pelayanan dengan
            hasil yang diberikan
          </Badge>
          <Badge className="mb-1 leading-relaxed">
            Keterangan: 1. Tidak Sesuai, 2. Kurang Sesuai, 3. Sesuai, 4. Sangat
            Sesuai
          </Badge>
        </div>
        <Options />
        <div className="text-start mt-3">
          <Badge className="mb-1 leading-relaxed">
            Bagaimana pendapat kamu tentang kompetensi/kemampuan petugas dalam
            pelayanan
          </Badge>
          <Badge className="mb-1 leading-relaxed">
            Keterangan: 1. Tidak Sesuai, 2. Kurang Sesuai, 3. Sesuai, 4. Sangat
            Sesuai
          </Badge>
        </div>
        <Options />
        <div className="text-start mt-3">
          <Badge className="mb-1 leading-relaxed">
            Bagaimana pendapat kamu tentang kualitas sarana dan prasarana
          </Badge>
          <Badge className="mb-1 leading-relaxed">
            Keterangan: 1. Tidak Sesuai, 2. Kurang Sesuai, 3. Sesuai, 4. Sangat
            Sesuai
          </Badge>
        </div>
        <Options />
        <div className="text-start mt-3">
          <Badge className="mb-1 leading-relaxed">
            Bagaimana pendapat kamu tentang perulaku petugas dalam pelayanan
            terkait kesopanan dan keramahan
          </Badge>
          <Badge className="mb-1 leading-relaxed">
            Keterangan: 1. Tidak Sesuai, 2. Kurang Sesuai, 3. Sesuai, 4. Sangat
            Sesuai
          </Badge>
        </div>
        <Options />
        <div className="text-start mt-3">
          <Badge className="mb-1 leading-relaxed">
            Bagaimana pendapat kamu tentang penanganan pengaduan penggunaan
            pelayanan
          </Badge>
          <Badge className="mb-1 leading-relaxed">
            Keterangan: 1. Tidak Sesuai, 2. Kurang Sesuai, 3. Sesuai, 4. Sangat
            Sesuai
          </Badge>
        </div>
        <Options />
        <div className="text-start mt-3">
          <Badge className="mb-1 leading-relaxed">
            Tulis pendapat kamu terkait keluhan, saran, dan harapan terhadap
            pelayanan ini
          </Badge>
          <Badge className="mb-1 leading-relaxed">
            Keterangan: 1. Tidak Sesuai, 2. Kurang Sesuai, 3. Sesuai, 4. Sangat
            Sesuai
          </Badge>
        </div>
        <Options />
        <Button>Kirim</Button>
      </div>
    </>
  );
};

export default Chat;
