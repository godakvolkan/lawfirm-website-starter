// import profile images
import ProfilePhoto1 from '../src/assets/img/profile1.png';
import ProfilePhoto2 from '../src/assets/img/profile2.png';
import ProfilePhoto3 from '../src/assets/img/profile3.png';

// import about icons
import Skill1 from '../src/assets/img/skills/skill1.png';
import Skill2 from '../src/assets/img/skills/skill2.png';
import Skill3 from '../src/assets/img/skills/skill3.png';
import Skill4 from '../src/assets/img/skills/skill4.png';
import Skill5 from '../src/assets/img/skills/skill5.png';
import Skill6 from '../src/assets/img/skills/skill6.png';

// import team images
import Lawyer1 from './assets/img/lawyer1.png';
import Lawyer2 from './assets/img/lawyer2.png';
import Lawyer3 from './assets/img/lawyer3.png';


import TeamMember1 from './assets/img/lawyer1.png';
import TeamMember2 from './assets/img/lawyer2.png';
import TeamMember3 from './assets/img/lawyer3.png';


// import social icons
import FacebookIcon from '../src/assets/img/social/facebook.png';
import TwitterIcon from '../src/assets/img/social/twitter.png';
import InstagramIcon from '../src/assets/img/social/instagram.png';
import YoutubeIcon from '../src/assets/img/social/youtube.png';
import PinterestIcon from '../src/assets/img/social/pinterest.png';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

// navigation data
export const navigation = [
  {
    name: 'Ana Sayfa',
    href: 'home',
  },
  {
    name: 'Hakkımızda',
    href: 'skills',
  },
  {
    name: 'Hizmetlerimiz',
    href: 'team',
  },
  {
    name: 'Bize Ulaşın',
    href: 'contact',
  },
];

// testimonials data
export const testimonials = [
  {
    text: 'Danışmanlık hizmetlerinden çok memnun kaldım. İşlerimizi hızlı ve güvenilir bir şekilde hallettiler.',
    name: 'Kemal Güney',
    image: ProfilePhoto1,
    position: 'Web Developer',
  },
  {
    text: 'Avukatımızın hızlı ve güvenilir hizmetlerinden çok memnun kaldık. Herkese tavsiye ederim.',
    name: 'Halil Keleş',
    image: ProfilePhoto2,
    position: 'Web Designer',
  },
  {
    text: 'Dava sürecimizde bize çok yardımcı oldular. Herkese tavsiye ederim.',
    name: 'Emre Kaan Şensoy',
    image: ProfilePhoto3,
    position: 'UI/UX Designer',
  },
];

// skills data
export const skills = [
  {
    icon: Skill1,
    title: 'Yolsuzluk',
    description:
      'Yolsuzlukla ilgili davalar ve hukuki süreçlerde müvekkillerimizi en iyi şekilde temsil ediyor, adaletin sağlanması için hukuki destek sunuyoruz.',
  },
  {
    icon: Skill2,
    title: 'İş Hukuku',
    description:
      'Çalışan ve işveren arasındaki hukuki ilişkileri düzenleyen iş hukuku kapsamında işe iade davaları, tazminat, fazla mesai alacakları gibi konularda danışmanlık veriyoruz.',
  },
  {
    icon: Skill3,
    title: 'Gayrimenkul Hukuku',
    description:
      'Tapu işlemleri, kira sözleşmeleri, taşınmaz alım-satımı ve kat mülkiyeti gibi gayrimenkulle ilgili tüm hukuki işlemlerde yanınızdayız.',
  },
  {
    icon: Skill4,
    title: 'Vergi Hukuku',
    description:
      'Vergi yükümlülükleri, vergi cezaları, vergi yapılandırmaları ve mali incelemelerde hukuki danışmanlık ve savunma hizmetleri sunuyoruz.',
  },
  {
    icon: Skill5,
    title: 'Şirketler Hukuku',
    description:
      'Şirket kuruluşu, ortaklık sözleşmeleri, birleşme ve devralmalar gibi ticari faaliyetlerinizde hukuki danışmanlık sağlıyoruz.',
  },
  {
    icon: Skill6,
    title: 'Banka ve Finans Hukuku',
    description:
      'Bankacılık işlemleri, kredi sözleşmeleri, icra takipleri ve finansal anlaşmalar konusunda hukuki destek sunuyoruz.',
  },
];


// team data
export const team = [
  {
    image: TeamMember1,
    name: ' Ahmet Yılmaz',
    position: 'Band & Financial Lawyer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
  },
  {
    image: TeamMember2,
    name: ' Ayşe Kaya',
    position: 'Family Lawyer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
  },
  {
    image: TeamMember3,
    name: ' Mehmet Demir',
    position: ' Criminal Lawyer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
  },
];

// social data
/*export const social = [
  {
    icon: FacebookIcon,
  },
  {
    icon: TwitterIcon,
  },
  {
    icon: InstagramIcon,
  },
  {
    icon: YoutubeIcon,
  },
  {
    icon: PinterestIcon,
  },
];*/





export const social = [
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/profiliniz",
  },
  {
    icon: <FaTwitter />,
    url: "https://x.com/gdk_vlkn",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/gdk_vlkn/?next=%2F",
  },
  {
    icon: <FaYoutube />,
    url: "https://www.youtube.com/profiliniz",
  },
  {
    icon: <FaPinterest />,
    url: "https://www.pinterest.com/profiliniz",
  },
];
