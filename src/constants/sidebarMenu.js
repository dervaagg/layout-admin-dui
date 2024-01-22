import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';

export const sidebarMenu = [
    {
        title: "Dashboard",
        icon: HomeOutlinedIcon,
        path: "/",
    },
    {
        title: "Profil",
        icon: ApartmentOutlinedIcon,
        path: "/team",
    },
    {
        title: "Kontak",
        icon: ContactsOutlinedIcon,
        path: "/contacts",
    },
    {
        title: "",
        tag: "divider",
    },
    {
        title: "Layanan Utama",
        icon: UploadFileOutlinedIcon,
        path: "/invoices",
    },
    {
        title: "Layanan Tambahan",
        icon: NoteAddOutlinedIcon,
        path: "/",
    },
    {
        title: "",
        tag: "divider",
    },
    {
        title: "Berita",
        icon: NewspaperOutlinedIcon,
        path: "/news",
    },
    {
        title: "RFC 2350",
        icon: PictureAsPdfOutlinedIcon,
        path: "/bar",
    },
    {
        title: "Panduan",
        icon: AutoStoriesOutlinedIcon,
        path: "/pie",
    },
];
