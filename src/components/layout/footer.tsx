import { Copyright } from 'lucide-react';

import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-50">
      <div className="flex items-center justify-center gap-1">
        <Typography className="flex items-center" variant="body3">
          <Copyright className="inline-block w-4 h-4 mr-1" />
          {new Date().getFullYear()} |&nbsp;
          <Link
            noCustomization
            externalLink
            withUnderline
            href={EXTERNAL_LINKS.LINKEDIN}
          >
            Designed
          </Link>
          &nbsp;and&nbsp;
          <Link
            noCustomization
            externalLink
            withUnderline
            href={EXTERNAL_LINKS.GITHUB_REPO}
          >
            coded
          </Link>
          &nbsp;with ❤️️ by Sagar Shah
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
