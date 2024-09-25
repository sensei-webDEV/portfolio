import { ReactComponent as IconLogo } from './logo.svg';
import { ReactComponent as IconDots } from './dots.svg';
import { ReactComponent as IconNodejs } from './nodejs.svg';
import { ReactComponent as IconNodejsWhite } from './nodejs-white.svg';
import { ReactComponent as IconPassport } from './passport.svg';
import { ReactComponent as IconPassportWhite } from './passport-white.svg';
import { ReactComponent as IconExpress } from './express.svg';
import { ReactComponent as IconExpressWhite } from './express-white.svg';
import { ReactComponent as IconMongodb } from './mongodb.svg';
import { ReactComponent as IconMongodbWhite } from './mongodb-white.svg';
import { ReactComponent as IconReactjs } from './reactjs.svg';
import { ReactComponent as IconTailwindcss } from './tailwindcss.svg';
import { ReactComponent as IconTailwindcssWhite } from './tailwindcss-white.svg';
import { ReactComponent as IconJavascript } from './javascript.svg';
import { ReactComponent as IconBootstrap } from './bootstrap.svg';
import { ReactComponent as IconPhotoshop } from './photoshop.svg';
import { ReactComponent as IconIllustrator } from './ai.svg';
import { ReactComponent as IconXd } from './xd.svg';
import { ReactComponent as IconDividerTechsTop } from './divider-techs-top.svg';
import { ReactComponent as IconDividerTechsBottom } from './divider-techs-bottom.svg';
import { ReactComponent as IconLinkedin } from './Linkedin.svg';
import { ReactComponent as IconSocketIO } from './socket-io.svg';
import { ReactComponent as IconSendGrid } from './send-grid.svg';
import { ReactComponent as IconStrapi } from './strapi.svg';
import { ReactComponent as IconRedis } from './redis.svg';
import { ReactComponent as IconPostman } from './postman.svg';
import { ReactComponent as IconGithub } from './github.svg';
import { ReactComponent as IconDigitalOcean } from './digital-ocean.svg';
import { ReactComponent as IconAWS } from './aws.svg';
import { ReactComponent as IconHeroku } from './heroku.svg';
import { ReactComponent as IconSingularityTitle } from './singularity-title.svg';
import { ReactComponent as IconTicTacGoTitle } from './tictacgo-title.svg';
import { ReactComponent as IconNoorTitle } from './noor-title.svg';
import { ReactComponent as IconBackendTitle } from './backend-title.svg';
import { ReactComponent as IconTechLeadTitle } from './techlead-title.svg';
import { ReactComponent as IconFrontendTitle } from './frontend-title.svg';
import { ReactComponent as IconUIUXTitle } from './uiux-title.svg';
import { ReactComponent as IconHtml5 } from './html5.svg';
import { ReactComponent as IconHtml5White } from './html5-white.svg';
import { ReactComponent as IconCss3 } from './css3.svg';
import { ReactComponent as IconCss3White } from './css3-white.svg';
import { ReactComponent as IconNetlifyWhite } from './netlify-white.svg';
import { ReactComponent as IconNetlify } from './netlify.svg';
import { ReactComponent as IconPuppeteer } from './puppeteer.svg';
import { ReactComponent as IconPuppeteerWhite } from './puppeteer-white.svg';
import { ReactComponent as IconWhatsapp } from './whatsapp.svg';
import { ReactComponent as IconJira } from './jira.svg';
import { ReactComponent as IconConfluence } from './confluence.svg';
import { ReactComponent as IconBitbucket } from './bitbucket.svg';
import { ReactComponent as IconScribbleArrow } from './scribble-arrow.svg';

import { useWindowSize } from 'react-use';

/**
 * personal SVG icon library.
 *
 * @param {string} icon - Icon name - list of names exported as an object
 * @param {number} width - Icon width
 * @return {ReactComponent} Icon
 *
 * @example
 *
 *     icons('nodejs', 64)
 */
export function Icons(icon, width) {
  const { width: windowWidth } = useWindowSize();

  //   screens: {
  //   "3xl": "1600px",
  //   "4xl": "2000px",
  //   "5xl": "2400px",
  // },

  const scaling = () => {
    if (windowWidth >= 2400) return 1.5;
    if (windowWidth >= 2000) return 1.5;
    if (windowWidth >= 1800) return 1.125;
    if (windowWidth >= 1600) return 1.1;
    if (windowWidth >= 1536) return 1.1;
    if (windowWidth >= 1280) return 1;
    if (windowWidth >= 1024) return 0.85;
    if (windowWidth >= 768) return 1;
    return 0.85;
  };

  switch (icon) {
    case 'LOGO':
      return <IconLogo width={(width * scaling()).toString()} />;
    case 'NETLIFY':
      return <IconNetlify width={(width * scaling()).toString()} />;
    case 'WHATSAPP':
      return <IconWhatsapp width={(width * scaling()).toString()} />;
    case 'NETLIFY_WHITE':
      return <IconNetlifyWhite width={(width * scaling()).toString()} />;
    case 'CSS3':
      return <IconCss3 width={(width * scaling()).toString()} />;
    case 'CSS3_WHITE':
      return <IconCss3White width={(width * scaling()).toString()} />;
    case 'PUPPETEER':
      return <IconPuppeteer width={(width * scaling()).toString()} />;
    case 'PUPPETEER_WHITE':
      return <IconPuppeteerWhite width={(width * scaling()).toString()} />;
    case 'HTML5':
      return <IconHtml5 width={(width * scaling()).toString()} />;
    case 'HTML5_WHITE':
      return <IconHtml5White width={(width * scaling()).toString()} />;
    case 'SINGULARITY_TITLE':
      return <IconSingularityTitle width={(width * scaling()).toString()} />;
    case 'TICTACGO_TITLE':
      return <IconTicTacGoTitle width={(width * scaling()).toString()} />;
    case 'NOOR_TITLE':
      return <IconNoorTitle width={(width * scaling()).toString()} />;
    case 'BACKEND_TITLE':
      return <IconBackendTitle width={(width * scaling()).toString()} />;
    case 'TECH_LEAD_TITLE':
      return <IconTechLeadTitle width={(width * scaling()).toString()} />;
    case 'FRONTEND_TITLE':
      return <IconFrontendTitle width={(width * scaling()).toString()} />;
    case 'UIUX_TITLE':
      return <IconUIUXTitle width={(width * scaling()).toString()} />;
    case 'NODEJS_WHITE':
      return <IconNodejsWhite width={(width * scaling()).toString()} />;
    case 'TAILWIND_WHITE':
      return <IconTailwindcssWhite width={(width * scaling()).toString()} />;
    case 'REDIS':
      return <IconRedis width={(width * scaling()).toString()} />;
    case 'PASSPORT_WHITE':
      return <IconPassportWhite width={(width * scaling()).toString()} />;
    case 'GITHUB':
      return <IconGithub width={(width * scaling()).toString()} />;
    case 'AWS':
      return <IconAWS width={(width * scaling()).toString()} />;
    case 'HEROKU':
      return <IconHeroku width={(width * scaling()).toString()} />;
    case 'DIGITAL_OCEAN':
      return <IconDigitalOcean width={(width * scaling()).toString()} />;
    case 'POSTMAN':
      return <IconPostman width={(width * scaling()).toString()} />;
    case 'SEND_GRID':
      return <IconSendGrid width={(width * scaling()).toString()} />;
    case 'STRAPI':
      return <IconStrapi width={(width * scaling()).toString()} />;
    case 'DOTS':
      return <IconDots width={(width * scaling()).toString()} />;
    case 'NODEJS':
      return <IconNodejs width={(width * scaling()).toString()} />;
    case 'PASSPORT':
      return <IconPassport width={(width * scaling()).toString()} />;
    case 'EXPRESS':
      return <IconExpress width={(width * scaling()).toString()} />;
    case 'EXPRESS_WHITE':
      return <IconExpressWhite width={(width * scaling()).toString()} />;
    case 'MONGODB':
      return <IconMongodb width={(width * scaling()).toString()} />;
    case 'MONGODB_WHITE':
      return <IconMongodbWhite width={(width * scaling()).toString()} />;
    case 'REACTJS':
      return <IconReactjs width={(width * scaling()).toString()} />;
    case 'TAILWIND':
      return <IconTailwindcss width={(width * scaling()).toString()} />;
    case 'JAVASCRIPT':
      return <IconJavascript width={(width * scaling()).toString()} />;
    case 'PHOTOSHOP':
      return <IconPhotoshop width={(width * scaling()).toString()} />;
    case 'ILLUSTRATOR':
      return <IconIllustrator width={(width * scaling()).toString()} />;
    case 'XD':
      return <IconXd width={(width * scaling()).toString()} />;
    case 'BOOTSTRAP':
      return <IconBootstrap width={(width * scaling()).toString()} />;
    case 'DIVIDER_TECHS_TOP':
      return <IconDividerTechsTop width={(width * scaling()).toString()} />;
    case 'DIVIDER_TECHS_BOTTOM':
      return <IconDividerTechsBottom width={(width * scaling()).toString()} />;
    case 'SOCKET_IO':
      return <IconSocketIO width={(width * scaling()).toString()} />;
    case 'JIRA':
      return <IconJira width={(width * scaling()).toString()} />;
    case 'CONFLUENCE':
      return <IconConfluence width={(width * scaling()).toString()} />;
    case 'BITBUCKET':
      return <IconBitbucket width={(width * scaling()).toString()} />;
    case 'SCRIBBLE_ARROW':
      return <IconScribbleArrow width={(width * scaling()).toString()} />;
    case 'LINKEDIN':
      return <IconLinkedin width={(width * scaling()).toString()} />;
    default:
      break;
  }
}

export const ICON_NAMES = {
  SEND_GRID: 'SEND_GRID',
  REDIS: 'REDIS',
  WHATSAPP: 'WHATSAPP',
  PUPPETEER: 'PUPPETEER',
  PUPPETEER_WHITE: 'PUPPETEER_WHITE',
  NETLIFY_WHITE: 'NETLIFY_WHITE',
  NETLIFY: 'NETLIFY',
  HTML5: 'HTML5',
  HTML5_WHITE: 'HTML5_WHITE',
  CSS3: 'CSS3',
  CSS3_WHITE: 'CSS3_WHITE',
  SINGULARITY_TITLE: 'SINGULARITY_TITLE',
  TICTACGO_TITLE: 'TICTACGO_TITLE',
  NOOR_TITLE: 'NOOR_TITLE',
  BACKEND_TITLE: 'BACKEND_TITLE',
  TECH_LEAD_TITLE: 'TECH_LEAD_TITLE',
  FRONTEND_TITLE: 'FRONTEND_TITLE',
  UIUX_TITLE: 'UIUX_TITLE',
  HEROKU: 'HEROKU',
  PASSPORT_WHITE: 'PASSPORT_WHITE',
  AWS: 'AWS',
  DIGITAL_OCEAN: 'DIGITAL_OCEAN',
  TAILWIND_WHITE: 'TAILWIND_WHITE',
  GITHUB: 'GITHUB',
  POSTMAN: 'POSTMAN',
  STRAPI: 'STRAPI',
  SOCKET_IO: 'SOCKET_IO',
  DIVIDER_TECHS_TOP: 'DIVIDER_TECHS_TOP',
  DIVIDER_TECHS_BOTTOM: 'DIVIDER_TECHS_BOTTOM',
  LOGO: 'LOGO',
  DOTS: 'DOTS',
  PHOTOSHOP: 'PHOTOSHOP',
  ILLUSTRATOR: 'ILLUSTRATOR',
  XD: 'XD',
  TAILWIND: 'TAILWIND',
  JAVASCRIPT: 'JAVASCRIPT',
  REACTJS: 'REACTJS',
  NODEJS: 'NODEJS',
  NODEJS_WHITE: 'NODEJS_WHITE',
  PASSPORT: 'PASSPORT',
  EXPRESS: 'EXPRESS',
  EXPRESS_WHITE: 'EXPRESS_WHITE',
  MONGODB: 'MONGODB',
  MONGODB_WHITE: 'MONGODB_WHITE',
  BOOTSTRAP: 'BOOTSTRAP',
  JIRA: 'JIRA',
  CONFLUENCE: 'CONFLUENCE',
  BITBUCKET: 'BITBUCKET',
  SCRIBBLE_ARROW: 'SCRIBBLE_ARROW',
  LINKEDIN: 'LINKEDIN',
};
