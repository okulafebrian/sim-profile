<template>
  <div class="py-10 space-y-10">
    <div class="p-10 text-center text-white bg-blue-400 rounded-2xl">
      <div class="text-3xl font-semibold mb-2">Sistem Informasi Manajemen</div>
      <div class="text-lg">testing</div>
    </div>

    <Tabs value="0">
      <TabList>
        <Tab value="0">Tiket</Tab>
        <Tab value="1">Identitas</Tab>
        <Tab value="2">Struktur</Tab>
        <Tab value="3">Layanan</Tab>
        <Tab value="4">Wiki</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="text-center space-y-6">
            <div>
              <div class="text-3xl font-semibold">Psst... tiket udah punya website sendiri, loh!</div>
              <div class="text-xl">Klik tombol di bawah ini untuk menuju website tiket yang baru</div>
            </div>
            <Button label="TIXSIM" outlined class="text-xl px-5 !rounded-full" />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="space-y-10">
            <div class="text-center font-semibold">
              <div class="text-xl">SISTEM INFORMASI MANAJEMEN</div>
              <div>BPK PENABUR Jakarta</div>
            </div>

            <div class="grid grid-cols-2 gap-20">
              <div class="space-y-4">
                <div class="text-lg font-semibold">Nilai Kami</div>
                <div>Kata kunci yang menjadi gagasan utama dalam pembentukan branding divisi SIstem Informasi Manajemen BPK Penabur Jakarta, yaitu :</div>
                <div class="flex items-center gap-4">
                  <div class="w-1/4 p-2 rounded-full font-semibold text-lg text-center text-white bg-blue-400">Creative</div>
                  <div class="flex-1">Desain yang menggambarkan kekreatifan dan inovasi dalam pendidikan, sesuai dengan nilai-nilai Kristiani.</div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-1/4 p-2 rounded-full font-semibold text-lg text-center text-white bg-blue-400">Hospitality</div>
                  <div class="flex-1">Pendekatan dan fitur yang dirancang menciptakan pengalaman pelayanan yang ramah dan memuaskan bagi pengguna atau pelanggan.</div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-1/4 p-2 rounded-full font-semibold text-lg text-center text-white bg-blue-400">Diversity</div>
                  <div class="flex-1">Menghargai dan merayakan keberagaman dalam lingkungan pekerjaan, serta sejalan dengan prinsip-prinsip inklusif dan toleransi.</div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-1/4 p-2 rounded-full font-semibold text-lg text-center text-white bg-blue-400">Integrity</div>
                  <div class="flex-1">Sistem yang mencerminkan nilai-nilai kejujuran, kebenaran, dan keterbukaan.</div>
                </div>
                <div class="flex items-center gap-4">
                  <div class="w-1/4 p-2 rounded-full font-semibold text-lg text-center text-white bg-blue-400">Transparancey</div>
                  <div class="flex-1">Mengkomunikasikan informasi dengan jelas dan transparan, mencerminkan nilai-nilai kejujuran dan integritas.</div>
                </div>
              </div>
              <div class="space-y-4">
                <div class="text-lg font-semibold">Produk dan Layanan</div>
                <div>Divisi SIM BPK PENABUR Jakarta menyediakan solusi konsultasi teknologi untuk membantu perusahaan dalam mengimplementasikan teknologi terkini untuk meningkatkan efisiensi operasional.</div>
                <div>
                  <div class="font-semibold">Pengembangan Perangkat Lunak</div>
                  <div>Menyediakan layanan pengembangan perangkat lunak kustom sesuai dengan kebutuhan klien.</div>
                </div>
                <div>
                  <div class="font-semibold">Manajemen Proyek</div>
                  <div>Menyediakan layanan manajemen proyek untuk memastikan proyek teknologi dilaksanakan dengan sukses dan tepat waktu</div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-3 gap-8">
              <Card pt:body:class="p-4 bg-blue-400" class="overflow-hidden">
                <template #header>
                  <img src="../assets/sim-1.png" alt="Logo" class="p-4 mx-auto h-40" />
                </template>
                <template #content>
                  <div class="text-center text-white">Logo</div>
                </template>
              </Card>
              <Card pt:body:class="p-4 bg-blue-400" class="overflow-hidden">
                <template #header>
                  <img src="../assets/color.png" alt="Warna" class="p-4 mx-auto h-40" />
                </template>
                <template #content>
                  <div class="text-center text-white">Warna</div>
                </template>
              </Card>
              <Card pt:body:class="p-4 bg-blue-400" class="overflow-hidden">
                <template #header>
                  <img src="../assets/typography-1.png" alt="Tipografi" class="p-4 mx-auto h-40" />
                </template>
                <template #content>
                  <div class="text-center text-white">Tipografi</div>
                </template>
              </Card>
            </div>

            <div class="space-y-10">
              <div class="text-lg font-semibold">Logo</div>
              <div>Logo utama SIM dirancang untuk menciptakan simbol jaringan atau teknologi dengan menggunakan negative space dari huruf "S" yang mewakili kata Sistem Informasi Manajemen.</div>
              <Card class="bg-gray-50">
                <template #content>
                  <img src="../assets/sim-2.png" alt="Logo" class="mx-auto h-96" />
                </template>
              </Card>
              <div>Visualisasi desain dibuat dengan menggunakan siluet dari jaringan dan serat optik yang merupakan bagian integral dari dunia Teknologi Informasi.</div>
              <div class="grid grid-cols-4">
                <img src="../assets/fiber-optic-1.png" alt="Fiber Optic" class="object-cover h-full" />
                <img src="../assets/sim-3.png" alt="SIM" class="object-cover h-full" />
                <img src="../assets/fiber-optic-2.png" alt="Fiber Optic" class="object-cover h-full" />
                <img src="../assets/sim-4.png" alt="SIM" class="object-cover h-full" />
              </div>

              <div class="space-y-4">
                <Card class="bg-gray-50">
                  <template #content>
                    <div class="flex justify-center gap-10 p-8">
                      <img src="../assets/sim-1.png" alt="SIM" class="h-72" />
                      <img src="../assets/sim-5.png" alt="SIM" class="h-72" />
                      <img src="../assets/sim-6.png" alt="SIM" class="h-72" />
                    </div>
                  </template>
                </Card>
                <div class="text-center">Logo construction grid</div>
              </div>
              <div class="flex justify-center items-center gap-10">
                <img src="../assets/sim-7.png" alt="SIM" class="w-72" />
                <img src="../assets/sim-8.png" alt="SIM" class="w-72" />
              </div>
              <div class="space-y-8">
                <div class="text-center">Terdapat 2 cara tata letak logo</div>
                <div class="grid grid-cols-2 gap-20">
                  <div class="space-y-4">
                    <div>Dalam divisi SIM, terdapat beberapa bagian pekerjaan yang berbeda-beda atau dengan kata lain terdapat 3 bagian besar pekerjaan dalam divisi SIM, yaitu :</div>
                    <ul class="list-disc ms-6">
                      <li>PSA (Pengembangan Sistem Aplikasi) yang mencakup : Pengembangan Aplikasi, Pengolahan Data, Manajemen Pembelajaran, dan Sistem Integrasi.</li>
                      <li>JI (Jaringan dan Infrastruktur) yang mencakup : Manajemen Jaringan dan Keamanaan Teknologi Informasi.</li>
                      <li>LTI (Layanan Teknologi Informasi) yang mencakup : Manajemen Operasional Teknologi Informasi (MOTI) dan Helpdesk & Evangelist Teknologi Informasi (HETI).</li>
                    </ul>
                    <div>Maka dari itu, dibentuklah subbranding dengan konsep logo yang sama dengan logo utama SIM, yaitu memanfaatkan negative space sehingga membentuk inisial huruf pertama pada setiap bagian divisi SIM</div>
                  </div>
                  <div class="space-y-4">
                    <div>Warna-warna gradien yang digunakan pada setiap logo bagian divisi SIM dipilih sesuai dengan tujuan pekerjaan masing-masing bagian divisi SIM :</div>
                    <div>PSA (Pengembangan Sistem Aplikasi): Menggunakan gradien merah dan jingga untuk melambangkan keberanian dan ketenangan dalam pengolahan data, dengan tujuan menghasilkan data yang valid secara keseluruhan.</div>
                    <div>
                      JI (Jaringan dan Infrastruktur): Menggunakan gradien hijau dan biru untuk mencerminkan profesionalitas dan kepercayaan, serta keterbukaan dalam mengelola jaringan, dengan tujuan membangun infrastruktur jaringan yang sesuai
                      dengan kebutuhan.
                    </div>
                    <div>
                      LTI (Layanan Teknologi Informasi): Menggunakan gradien hijau muda dan tua untuk menggambarkan pelayanan yang tenang dan profesional dalam menangani berbagai permasalahan teknologi informasi, dengan harapan dapat memberikan
                      pelayanan yang optimal kepada pengguna.
                    </div>
                  </div>
                </div>
              </div>
              <Card class="bg-gray-50">
                <template #content>
                  <div class="grid grid-cols-3 gap-8">
                    <div v-for="department in departments" class="space-y-8">
                      <img v-for="section in department.sections" :src="'./src/assets/' + section.logo" :alt="section.name" class="h-24 max-w-none" />
                    </div>
                  </div>
                </template>
              </Card>
            </div>

            <div class="space-y-4">
              <div class="text-lg font-semibold">Warna</div>
              <div>
                Palet warna ini merupakan komponen warna utama yang membentuk identitas logo. Terdapat beberapa warna seperti dari biru, hijau, jingga dan merah sebagai warna pilihan yang membentuk logo dan sub-logo dari divisi SIM. Menggunakan
                warna-warna yang tegas dan kontras, sehingga memudahkan untuk diingat oleh orang-orang yang melihatnya.
              </div>
              <Card>
                <template #content>
                  <div class="flex justify-center gap-6">
                    <div class="text-center space-y-2">
                      <div class="w-24 h-24 rounded-full bg-[#5AE2E5]" />
                      <div>#5AE2E5</div>
                    </div>
                    <div class="text-center space-y-2">
                      <div class="w-24 h-24 rounded-full bg-[#90AEE5]" />
                      <div>#90AEE5</div>
                    </div>
                    <div class="text-center space-y-2">
                      <div class="w-24 h-24 rounded-full bg-[#03E5A3]" />
                      <div>#03E5A3</div>
                    </div>
                    <div class="text-center space-y-2">
                      <div class="w-24 h-24 rounded-full bg-[#0098E5]" />
                      <div>#0098E5</div>
                    </div>
                    <div class="text-center space-y-2">
                      <div class="w-24 h-24 rounded-full bg-[#0FE501]" />
                      <div>#0FE501</div>
                    </div>
                    <div class="text-center space-y-2">
                      <div class="w-24 h-24 rounded-full bg-[#CBEB02]" />
                      <div>#CBEB02</div>
                    </div>
                    <div class="text-center space-y-2">
                      <div class="w-24 h-24 rounded-full bg-[#E58A00]" />
                      <div>#E58A00</div>
                    </div>
                    <div class="text-center space-y-2">
                      <div class="w-24 h-24 rounded-full bg-[#FF1700]" />
                      <div>#FF1700</div>
                    </div>
                  </div>
                </template>
              </Card>
            </div>

            <div class="space-y-4">
              <div class="text-lg font-semibold">Tipografi</div>
              <div>
                Tipografi yang digunakan untuk logo divisi SIM adalah sans-serif, dengan font yang disebut Gabarito, khususnya Gabarito Black. Pemilihan font ini didasarkan pada anatomi huruf yang tegas dan tanpa kait, sehingga memudahkan dan
                menjelaskan keterbacaannya. Dan juga memberikan kesan modern, bersih, dan universal.
              </div>
              <Card>
                <template #title>
                  <div class="text-3xl">Gabarito</div>
                </template>
                <template #content>
                  <div class="grid grid-cols-2 items-end gap-10">
                    <img src="../assets/typography-1.png" alt="test" />
                    <img src="../assets/typography-2.png" alt="" />
                  </div>
                </template>
              </Card>
            </div>
          </div>
        </TabPanel>

        <TabPanel value="2">
          <div>
            <OrganizationChart :value="organization">
              <template #default="slotProps">
                <span>{{ slotProps.node.label }}</span>
              </template>
            </OrganizationChart>
          </div>
        </TabPanel>

        <TabPanel value="3">
          <div class="grid grid-cols-3 gap-6">
            <div v-for="department in departments" class="space-y-6">
              <img :src="'./src/assets/' + department.logo" :alt="department.name" class="h-24" />
              <Card v-for="section in department.sections">
                <template #content>
                  <div class="space-y-4">
                    <img :src="'./src/assets/' + section.logo" :alt="section.name" class="h-20" />
                    <ul class="list-disc ms-4">
                      <li v-for="service in section.services">
                        <button class="block text-left hover:underline" @click="open(service)">{{ service.name }}</button>
                      </li>
                    </ul>
                  </div>
                </template>
              </Card>
            </div>
          </div>
        </TabPanel>

        <TabPanel value="4">
          <p class="m-0">eeedllitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>

  <Dialog v-model:visible="visible" modal :header="selectedService?.name" :style="{ width: '25rem' }">
    <div>{{ selectedService?.description }}</div>
  </Dialog>
</template>

<script setup>
import Tabs from "primevue/tabs"
import TabList from "primevue/tablist"
import Tab from "primevue/tab"
import TabPanels from "primevue/tabpanels"
import TabPanel from "primevue/tabpanel"
import Button from "primevue/button"
import Card from "primevue/card"
import Dialog from "primevue/dialog"
import OrganizationChart from "primevue/organizationchart"
import { ref } from "vue"

const visible = ref(false)
const selectedService = ref()

function open(service) {
  selectedService.value = service
  visible.value = true
}

const organization = ref({
  label: "Presiden",
  children: [
    {
      label: "Wakil Presiden",
      children: [
        {
          label: "Menteri 1"
        },
        {
          label: "Menteri 2"
        },
        {
          label: "Menteri 3"
        }
      ]
    }
  ]
})

const departments = [
  {
    name: "Jaringan Infrastruktur",
    logo: "jaringan-infrastruktur.png",
    sections: [
      {
        name: "Manajemen Jaringan",
        logo: "manajemen-jaringan.png",
        services: [
          {
            name: "Akses Internet",
            description:
              "Pengelolaan akses internet melibatkan penyediaan dan pengaturan koneksi internet untuk seluruh pengguna di perusahaan. Ini mencakup pemantauan kecepatan, kestabilan, dan keamanan koneksi internet untuk memastikan akses yang cepat dan handal bagi semua karyawan."
          },
          {
            name: "Pengelolaan Bandwidth",
            description:
              "Pengelolaan bandwidth adalah proses pengaturan alokasi dan penggunaan bandwidth jaringan untuk memastikan performa yang optimal. Ini termasuk pengaturan batas bandwidth, pemantauan penggunaan, dan optimasi untuk menghindari kemacetan jaringan dan memastikan semua aplikasi berjalan lancar."
          },
          {
            name: "Koneksi Internet LAN",
            description:
              "Koneksi internet LAN (Local Area Network) melibatkan penyediaan akses internet di dalam jaringan lokal perusahaan. Pengelolaan ini mencakup konfigurasi dan pemeliharaan koneksi jaringan internal agar dapat terhubung dengan internet secara efektif dan aman."
          },
          {
            name: "Access Point",
            description:
              "Access Point adalah perangkat yang menyediakan akses jaringan nirkabel (Wi-Fi) kepada perangkat pengguna. Pengelolaan access point meliputi instalasi, konfigurasi, dan pemeliharaan untuk memastikan cakupan sinyal yang baik, keamanan jaringan, dan konektivitas yang stabil."
          },
          {
            name: "Router",
            description:
              "Router adalah perangkat yang mengarahkan lalu lintas data antara jaringan lokal dan internet. Pengelolaan router mencakup konfigurasi routing, pemantauan kinerja, dan penanganan masalah untuk memastikan data dikirim dengan efisien dan jaringan berfungsi dengan baik."
          },
          {
            name: "Switch",
            description:
              "Switch adalah perangkat yang menghubungkan perangkat dalam jaringan lokal (LAN) dan memungkinkan pertukaran data antar perangkat. Pengelolaan switch melibatkan konfigurasi port, pengaturan VLAN (Virtual Local Area Network), dan pemantauan performa untuk memastikan transfer data yang cepat dan aman."
          },
          {
            name: "Firewall",
            description:
              "Firewall adalah perangkat keamanan yang mengontrol akses masuk dan keluar dari jaringan. Pengelolaan firewall mencakup konfigurasi aturan keamanan, pemantauan aktivitas jaringan, dan pembaruan kebijakan untuk melindungi jaringan dari ancaman eksternal dan menjaga data tetap aman."
          }
        ]
      },
      {
        name: "Keamanan Teknologi Informasi",
        logo: "keamanan-teknologi-informasi.png",
        services: [
          {
            name: "Email",
            description:
              "Pengelolaan email mencakup administrasi sistem email perusahaan, termasuk pengaturan akun email, pemantauan dan perlindungan dari ancaman seperti spam dan malware. Ini bertujuan untuk memastikan komunikasi yang aman dan lancar antara karyawan dan dengan pihak luar."
          },
          {
            name: "Account",
            description:
              "Pengelolaan akun melibatkan administrasi akses pengguna ke berbagai sistem dan aplikasi. Ini mencakup pembuatan, pemeliharaan, dan penghapusan akun pengguna, serta pengaturan hak akses dan otorisasi. Pengelolaan akun bertujuan untuk memastikan bahwa hanya pengguna yang berwenang yang dapat mengakses sumber daya yang sesuai."
          },
          {
            name: "Server",
            description:
              "Pengelolaan server meliputi instalasi, konfigurasi, pemantauan, dan pemeliharaan server yang digunakan untuk menjalankan aplikasi dan menyimpan data. Ini termasuk pemantauan kinerja, pembaruan perangkat lunak, dan penerapan patch keamanan untuk memastikan server berfungsi dengan baik dan aman dari potensi ancaman."
          },
          {
            name: "NAS (Penyimpanan yang Terhubung ke Jaringan)",
            description:
              "NAS (Network Attached Storage) adalah perangkat penyimpanan yang terhubung ke jaringan dan memungkinkan akses data dari berbagai perangkat. Pengelolaan NAS mencakup konfigurasi, pemeliharaan, dan pengaturan akses untuk memastikan bahwa data tersimpan dengan aman dan dapat diakses secara efisien oleh pengguna yang berwenang."
          },
          {
            name: "Data Loss Prevention",
            description:
              "Data Loss Prevention (DLP) adalah strategi dan teknologi yang digunakan untuk mencegah kehilangan atau kebocoran data sensitif. Pengelolaan DLP melibatkan penerapan kebijakan, pemantauan aktivitas data, dan penggunaan alat keamanan untuk melindungi data dari akses tidak sah, pencurian, atau kerusakan, serta memastikan kepatuhan terhadap regulasi keamanan data."
          }
        ]
      }
    ]
  },
  {
    name: "Layanan Teknologi Informasi",
    logo: "layanan-teknologi-informasi.png",
    sections: [
      {
        name: "Manajemen Operasional Teknologi Informasi",
        logo: "manajemen-operasional-teknologi-informasi.png",
        services: [
          {
            name: "CCTV",
            description:
              "Pengelolaan CCTV mencakup instalasi, konfigurasi, dan pemeliharaan sistem kamera pengawas. Ini bertujuan untuk memantau dan merekam aktivitas di area tertentu untuk meningkatkan keamanan. Pengelolaan ini juga meliputi pemantauan sistem secara real-time dan pengelolaan rekaman video."
          },
          {
            name: "LCD Projector",
            description:
              "Pengelolaan LCD Projector melibatkan instalasi, konfigurasi, dan pemeliharaan perangkat proyektor untuk presentasi dan display. Ini termasuk pemeliharaan lampu, dan troubleshooting untuk memastikan tampilan yang jernih dan optimal."
          },
          {
            name: "Printer",
            description:
              "Pengelolaan printer mencakup instalasi, pemeliharaan, dan perbaikan perangkat pencetak. Ini meliputi pengaturan konektivitas, manajemen bahan habis pakai seperti tinta dan kertas, serta penyelesaian masalah teknis untuk memastikan printer berfungsi dengan baik."
          },
          {
            name: "Scanner",
            description: "Pengelolaan scanner melibatkan instalasi dan pemeliharaan perangkat pemindai dokumen. Ini mencakup pemeliharaan perangkat keras, serta troubleshooting untuk memastikan hasil pemindaian yang akurat dan berkualitas tinggi."
          },
          {
            name: "Dekstop",
            description:
              "Pengelolaan desktop mencakup instalasi, konfigurasi, dan pemeliharaan komputer meja. Ini termasuk pengaturan perangkat lunak, pemantauan kinerja, dan perbaikan masalah teknis untuk memastikan komputer berfungsi dengan baik dan mendukung produktivitas kerja."
          },
          {
            name: "Laptop",
            description:
              "Pengelolaan laptop melibatkan instalasi, konfigurasi, dan pemeliharaan komputer portabel. Ini termasuk manajemen perangkat lunak, pemantauan kinerja, serta perbaikan masalah teknis untuk memastikan laptop dapat digunakan dengan efektif di berbagai lokasi."
          },
          {
            name: "Mesin Fingerprint",
            description:
              "Pengelolaan mesin fingerprint mencakup instalasi, konfigurasi, dan pemeliharaan perangkat absensi berbasis sidik jari. Ini meliputi pengaturan pengguna, pemeliharaan perangkat keras, serta penanganan masalah teknis untuk memastikan akurasi dan keandalan sistem absensi."
          },
          {
            name: "Interactive Flat Panel",
            description: "Interactive Flat Panel adalah layar sentuh besar yang digunakan untuk presentasi dan kolaborasi. Pengelolaan perangkat ini meliputi instalasi, konfigurasi, dan pemeliharaan."
          }
        ]
      },
      {
        name: "Helpdesk Evangelist Teknologi Informasi",
        logo: "helpdesk-evangelist-teknologi-informasi.png",
        services: [
          {
            name: "TIXSIM - Sistem Tiketing untuk Permasalahan IT",
            description:
              "TIXSIM adalah sistem tiketing yang digunakan untuk mencatat, melacak, dan menyelesaikan permasalahan IT yang dilaporkan oleh pengguna. Pengelolaan TIXSIM mencakup penanganan tiket, alokasi tugas kepada tim IT, pemantauan status penyelesaian masalah, dan analisis laporan untuk meningkatkan efisiensi layanan IT."
          },
          {
            name: "IT Newsletter",
            description:
              "IT Newsletter adalah publikasi berkala yang berisi informasi terbaru, tips, dan perkembangan dalam bidang teknologi informasi. Pengelolaannya melibatkan pengumpulan konten, penulisan artikel, desain layout, dan distribusi kepada karyawan untuk memastikan mereka selalu mendapatkan informasi terbaru dan relevan mengenai teknologi informasi di perusahaan."
          },
          {
            name: "UI/UX Design",
            description:
              "UI/UX Design adalah proses desain antarmuka dan pengalaman pengguna untuk aplikasi dan situs web. Pengelolaan ini mencakup penelitian pengguna, pembuatan wireframe, desain visual, dan pengujian untuk memastikan aplikasi atau situs web mudah digunakan, menarik, dan memenuhi kebutuhan pengguna dengan baik."
          },
          {
            name: "Konten IT untuk Penyuluhan Karyawan & Media Sosial",
            description:
              "Pengelolaan konten IT untuk penyuluhan karyawan dan media sosial mencakup pembuatan materi edukatif mengenai teknologi informasi. Ini termasuk artikel, video, infografis, dan postingan media sosial yang bertujuan untuk meningkatkan pemahaman karyawan tentang IT, serta memberikan informasi dan tips yang bermanfaat untuk penggunaan teknologi sehari-hari."
          }
        ]
      }
    ]
  },
  {
    name: "Pengembangan Sistem Aplikasi",
    logo: "pengembangan-sistem-aplikasi.png",
    sections: [
      {
        name: "Pengembangan Sistem",
        logo: "pengembangan-sistem.png",
        services: [
          {
            name: "Web Apps",
            description:
              "Web Apps adalah aplikasi yang berjalan di browser web dan dirancang untuk memberikan pengalaman interaktif kepada pengguna. Pengelolaan web apps mencakup perancangan, pengembangan, pengujian, dan pemeliharaan aplikasi web untuk memastikan fungsionalitas yang optimal, keamanan data, dan pengalaman pengguna yang baik."
          },
          {
            name: "Mobile Apps",
            description:
              "Mobile Apps adalah aplikasi yang dirancang untuk perangkat seluler seperti smartphone dan tablet. Pengelolaannya meliputi pengembangan aplikasi untuk platform iOS dan Android, pengujian untuk berbagai perangkat, serta pemeliharaan dan pembaruan berkala untuk memastikan aplikasi berfungsi dengan baik dan memenuhi kebutuhan pengguna."
          },
          {
            name: "Problem Solving Apps System",
            description:
              "Problem Solving Apps System adalah aplikasi yang dirancang untuk membantu pengguna menyelesaikan masalah tertentu secara efektif. Pengelolaannya mencakup identifikasi masalah yang sering dihadapi pengguna, pengembangan solusi dalam bentuk aplikasi, pengujian aplikasi, serta pemantauan dan perbaikan berdasarkan umpan balik pengguna."
          },
          {
            name: "Maintenance System",
            description:
              "Maintenance System adalah sistem yang mengelola pemeliharaan aplikasi dan sistem lainnya agar tetap berfungsi dengan baik. Pengelolaannya mencakup pembaruan perangkat lunak, perbaikan bug, pemantauan kinerja, serta implementasi peningkatan untuk memastikan sistem selalu dalam kondisi optimal dan aman."
          }
        ]
      },
      {
        name: "Pengolahan Data",
        logo: "pengolahan-data.png",
        services: [
          {
            name: "Dashboard Data",
            description:
              "Dashboard Data adalah alat visualisasi yang menampilkan data penting dalam format yang mudah dipahami dan diakses. Pengelolaan dashboard data meliputi pengumpulan data dari berbagai sumber, pembuatan visualisasi data seperti grafik dan tabel, serta pemeliharaan dashboard untuk memastikan data selalu akurat dan up-to-date. Ini membantu manajemen dalam pengambilan keputusan yang berbasis data."
          },
          {
            name: "Permintaan Data",
            description:
              "Permintaan Data adalah proses dimana pengguna dapat mengajukan permintaan untuk mendapatkan data tertentu. Pengelolaan permintaan data mencakup penerimaan, verifikasi, dan pemrosesan permintaan data, serta penyediaan data yang diminta dalam format yang sesuai. Ini memastikan bahwa pengguna mendapatkan data yang mereka butuhkan dengan cepat dan efisien untuk analisis dan laporan."
          }
        ]
      },
      {
        name: "Manajemen Pembelajaran",
        logo: "manajemen-pembelajaran.png",
        services: [
          {
            name: "Moodle",
            description:
              "Moodle adalah platform Learning Management System (LMS) yang memungkinkan pembuatan dan pengelolaan kursus online. Pengelolaan LMS Moodle meliputi pengaturan dan konfigurasi kursus, pengunggahan materi pembelajaran, pengelolaan penilaian, dan pemantauan kemajuan peserta. Moodle menyediakan fitur seperti forum diskusi, kuis, dan alat kolaborasi untuk mendukung proses pembelajaran yang interaktif dan efektif."
          },
          {
            name: "Riset Teknologi Pembelajaran",
            description:
              "Riset Teknologi Pembelajaran mencakup investigasi dan evaluasi teknologi terbaru yang dapat diterapkan dalam proses pembelajaran. Pengelolaan riset ini meliputi identifikasi tren teknologi pendidikan, evaluasi alat dan platform baru, serta pengujian untuk menentukan efektivitas dan potensi penerapannya dalam lingkungan pendidikan. Tujuannya adalah untuk meningkatkan metode dan alat pembelajaran, serta menyediakan solusi yang inovatif untuk mendukung pembelajaran yang lebih baik."
          }
        ]
      },
      {
        name: "Sistem Integrasi",
        logo: "sistem-integrasi.png",
        services: [
          {
            name: "Pelaporan Permasalahan Apps System: Microsoft Dynamic GP",
            description:
              "Microsoft Dynamics GP adalah sistem manajemen bisnis yang membantu mengelola berbagai aspek operasional perusahaan. Pengelolaan pelaporan permasalahan pada aplikasi ini mencakup identifikasi dan dokumentasi masalah, analisis penyebab, serta penyelesaian masalah yang berkaitan dengan kinerja, fungsionalitas, dan integrasi aplikasi. Tujuannya adalah untuk memastikan bahwa sistem berjalan dengan lancar dan mendukung operasional bisnis secara efektif."
          },
          {
            name: "Pelaporan Permasalahan Apps System: PSB Web Apps",
            description:
              "PSB Web Apps adalah aplikasi berbasis web yang digunakan untuk berbagai keperluan bisnis. Pengelolaan pelaporan permasalahan pada aplikasi ini melibatkan identifikasi dan pelaporan masalah teknis atau fungsional, analisis penyebab masalah, dan koordinasi dengan tim pengembangan untuk memperbaiki masalah. Ini memastikan bahwa aplikasi tetap berfungsi dengan baik dan memenuhi kebutuhan pengguna."
          }
        ]
      }
    ]
  }
]
</script>
