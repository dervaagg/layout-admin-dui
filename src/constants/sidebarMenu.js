import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export const sidebarMenu = [
    {
        title: "Dashboard",
        icon: HomeOutlinedIcon,
        path: "/",
    },
    {
        title: "Informasi",
        tag: "divider",
    },
    {
        title: "Profil",
        icon: PeopleOutlinedIcon,
        path: "/team",
    },
    {
        title: "Kontak",
        icon: ContactsOutlinedIcon,
        path: "/contacts",
    },
    {
        title: "Layanan",
        icon: ReceiptOutlinedIcon,
        path: "/invoices",
    },
    {
        title: "Berita",
        tag: "divider",
    },
    {
        title: "Edit Berita",
        icon: PersonOutlinedIcon,
        path: "/form",
    },
    {
        title: "Dokumen Area",
        tag: "divider",
    },
    {
        title: "RFC 2350",
        icon: BarChartOutlinedIcon,
        path: "/bar",
    },
    {
        title: "Panduan",
        icon: PieChartOutlineOutlinedIcon,
        path: "/pie",
    },
];
