import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  page: SelectedPage.Benefits | SelectedPage.ContactUs | SelectedPage.Home | SelectedPage.OurClasses;
  selectedPage: SelectedPage.Benefits | SelectedPage.ContactUs | SelectedPage.Home | SelectedPage.OurClasses;
  setSelectedPage: (value: SelectedPage.Benefits | SelectedPage.ContactUs | SelectedPage.Home | SelectedPage.OurClasses) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? 'text-pink-500' : ''} transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;