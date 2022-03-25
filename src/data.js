const materi = [
  {
    bab1: [
      {
        heading: "Organisasi Komputer",
        materi:
          "Organisasi Komputer berkaitan dengan unit-unit operasional dan interkoneksinya yang merealisasikan spesifikasi arsitektural.",
        list: [],
      },
      {
        heading: "Arsitektur Komputer",
        materi:
          "Arsitektur berkaitan dengan atribut-atribut sebuah sistem yang tampak (visible) bagi seorang pemrogram, yaitu atribut-atribut yang memiliki dampak langsung pada eksekusi logis sebuah program.",
        list: [],
      },
      {
        heading: "Struktur Dan Fungsi Komputer",
        materi: `Struktur adalah cara komponen-komponen dalam sebuah komputer saling terkait 
        Fungsi adalah operasi pada masing-masing komponen sebagai bagian dari struktur`,
        list: [],
      },
      {
        heading: "Fungsi Komputer",
        materi:
          "Sebuah komputer dapat melakukan fungsi pengolahan data, penyimpanan data, pemindahan data dan kontrol",
        list: [],
      },
      {
        heading: "Struktur Komputer",
        materi: "",
        list: [
          "CPU (Cental Processing Unit)",
          "Main Memory",
          "Input Output (I/O)",
          "System Interconections",
          "Komponen-komponen CPU",
          "Control Unit (CU)",
          "Arithmetic and Logic Unit (ALU)",
          "Register",
          "CPU Interconnections",
        ],
      },
      {
        heading: "Perancangan Dan Kinerja Komputer",
        materi: `Kinerja sebuah sistem komputer merupakan hasil proses dari seluruh komponen komputer, yang melibatkan CPU, memori utama, memori sekunder, bus, peripheral.
        Teknik-teknik yang dikembangkan untuk meningkatkan kinerja komputer:
        `,
        list: [
          "Branch Prediction",
          "Data Flow Analysis",
          "Speculative Execution",
        ],
      },
    ],
    bab2: [
      {
        heading: "Komponen CPU",
        materi: `Register
            Register yang terdapat dalam CPU, yaitu :`,
        list: [
          "MAR (Memory Address Register)",
          "MBR (Memory Buffer Register)",
          "PC (Program Counter)",
          "I/O AR (I/O Addres Register)",
          "I/O BR (I/O Buffer Register)",
          "IR (Instruction Register)",
          "AC (Accumulator)",
        ],
      },
      {
        heading: "Modul I/O",
        materi: `Memindahkan data dari perangkat eksternal ke CPU dan sebaliknya
            Modul ini berisi buffer internal untuk menampung data ini sementara sampai data itu di kirimkan.
            `,
        list: [],
      },
      {
        heading: "Fungsi Komputer",
        materi: `• Fungsi dasar komputer adalah eksekusi program 
        • Program yang akan di eksekusi oleh CPU ada dalam memori 
        Ada 2 langkah pengambilan instruksi : 
1. CPU membaca instruksi yang ada di memori (fetch) 
2. CPU mengeksekusi setiap instruksi (execute)
      
            `,
        list: [],
      },
      {
        heading: "Siklus fetch",
        materi: `suatu register Program Counter (PC) di pakai untuk mengawasi instruksi yang akan di baca selanjutnya.
        Instruksi yang di baca akan di muatkan kedalam sebuah register (IR) Instructions Register
        Data di pindahkan dari CPU ke memori atau sebaliknya
        Data dapat di pindahkan ke atau dari dunia luar dengan pemindahan antara CPU dan modul I/O.
        CPU dapat membentuk sejumlah operasi aritmatik /logik.
        Sebuah instruksi yang dapat mengubah urutan eksekusi
        
            `,
        list: [],
      },
      {
        heading: "Interrupts",
        materi: `Interrupt disediakan terutama sebagai cara untuk meningkatkan efesiensi pengolahan, karena sebagian besar perangkat eksternal jauh lebih lambat di bandingkan prosessor
        Kelas-kelas Interupt :
        `,
        list: ["Program", "Timer", "I/O", "H/W failure"],
      },
      {
        heading: "Multiple interrupt",
        materi: `Dengan tidak mengijinkan terjadinya interrupt lain pada saat suatu interupt sedang di proses. (interrupt lain di tangguhkan)

        Keuntungan : Pendekatan tersebut cukup baik dan sederhana karena interrupt di tangani dalam urutan yang cukup ketat.
        Kekurangan: Pendekatan ini tidak memperhitungkan prioritas relatif atau kebutuhan waktu kritis`,
        list: [],
      },
      {
        heading: "Fungsi I/O",
        materi: `
        Sebuah I/O dapat bertukar data secara langsung dengan CPU.
        Sebuah I/O juga dapat bertukar data langsung dengan memori.`,
        list: [],
      },
      {
        heading: "Struktur Interkoneksi",
        materi: `
        Komputer terdiri dari CPU – Memori – I/O
        Komponen bus/ lintasan yang menghubungkan berbagai modul di sebut dengan struktur interkoneksi
        Struktur interkoneksi harus mendukung jenis perpindahan berikut ini:
        `,
        list: [
            "Memori ke CPU",
            "CPU ke Memori",
            "I/O ke CPU",
            "CPU ke I/O",
            "I/O ke memori atau memori ke I/O"
        ],
      },
      {
        heading: "Struktur Bus",
        materi: `
        Bus-bus yang menghubungkan komponen utama sistem (CPU,Memori, I/O) disebut dengan BUS SISTEM
        Biasanya bus sistem terdiri dari 50 – 100 saluran yang terpisah`,
        list: [
        ],
      },
      {
        heading: "Klasifikasi Bus",
        materi: `
        Saluran data : memberikan lintasan bagi perpindahan data antara 2 modul sistem. Saluran ini secara kolektif disebut BUS DATA
        Saluran Alamat : digunakan untuk menandakan sumber atau tujuan data pada bus data.
        Saluran Kontrol : di gunakan untuk mengontrol akses ke saluran alamat dan penggunaan data dan saluran alamat.`,
        list: [
 
        ],
      },
      {
        heading: "Elemen – elemen rancangan bus",
        materi: `
        Jenis:
        -	Dedicated
        -	Multiplexed

        Keuntungan: 
        -	Dedicated : Throughput yang tinggi, karena terjadi kemacetan yang kecil
        -	Multiplexed : Memerlukan saluran yang sedikit menghemat ruang dan biaya
        
        
        Kerugian : 
        -	Dedicated : Meningkatnya ukuran dan biaya sistem
        -	Multiplexed : Rangkaian lebih kompleks, terjadi penurunan kinerja, kerena event-event tertentu yang menggunakan saluran bersama-sama tidak dapat berfungsi secara paralel
        `,
        list: [
 
        ],
      },
      {
        heading: "Jenis Transfer Data",
        materi: '',
        list: [
            "Read",
            "Write",
            "Read modify write",
            "Read after write",
            "Blok"
        ],
      },
      {
        heading: "Bus PCI ( Peripheral Component Interconnect )",
        materi: `
        -	Merupakan bus yang tidak tergantung processor dan berbanwidth tinggi yang dapat berfungsi sebagai bus mezzanine/bus berkecepatan tinggi
        -	Mezzanine adalah bus berkecepatan tinggi yang sangat terintegrasi dengan sistem
        `,
        list: [
 
        ],
      },
      {
        heading: "Perbedaan PCI dan future bus+",
        materi: `
        PCI di tujukan bagi implementasi murah yang membutuhkan bidang fisik secara minimal
        -	Future bus+ dimaksudkan untuk memberikan fleksibilitas yang tinggi dan fungsionalitas yang luas untuk memenuhi kebutuhan berbagai sistem yang berkinerja tinggi terutama sistemsistem yang mahal
         `,
        list: [
 
        ],
      },
    ],
  },
];
