import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Smooth Capture Docs',
      logo: {
        src: './public/logo/logo.png',
        alt: 'Smooth Capture',
      },
      favicon: '/favicon.svg',
      social: [
        {
          icon: 'x.com',
          label: 'X',
          href: 'https://x.com/vunguyendev',
        },
      ],
      customCss: ['./src/styles/starlight.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Installation', link: '/' },
            { label: 'System Requirements', link: '/guides/system-requirements/' },
            { label: 'Setting up & Permissions', link: '/guides/setup-permissions/' },
          ],
        },
        {
          label: 'Recording',
          items: [
            { label: 'Recording', link: '/guides/recording/' },
            { label: 'Recording entire display', link: '/guides/recording/record-display/' },
            { label: 'Recording a single window', link: '/guides/recording/record-window/' },
            { label: 'Recording area', link: '/guides/recording/record-area/' },
          ],
        },
        {
          label: 'Look & Feel',
          items: [
            { label: 'Background', link: '/guides/look-and-feel/background/' },
            { label: 'Captions', link: '/guides/look-and-feel/captions/' },
            { label: 'Mouse', link: '/guides/look-and-feel/mouse/' },
            { label: 'Camera (Webcam Overlay)', link: '/guides/look-and-feel/camera/' },
            { label: 'Dynamic Camera Layouts', link: '/guides/look-and-feel/dynamic-camera-layout/' },
            { label: 'Copy Current Frame', link: '/guides/look-and-feel/copy-current-frame/' },
            { label: 'Save Current Frame', link: '/guides/look-and-feel/save-current-frame/' },
            { label: 'Save Frame (Transparent)', link: '/guides/look-and-feel/save-frame-transparent/' },
            { label: 'Background Music', link: '/guides/look-and-feel/background-music/' },
            { label: 'Copy Frame (Transparent)', link: '/guides/look-and-feel/copy-frame-transparent/' },
          ],
        },
        {
          label: 'Editing',
          items: [
            { label: 'Speeding up the video', link: '/guides/editing/speeding-up/' },
            { label: 'Cropping the recording', link: '/guides/editing/cropping/' },
            { label: 'Trimming', link: '/guides/editing/trimming/' },
            { label: 'Mouse click sound', link: '/guides/editing/mouse-click-sound/' },
            { label: 'Lightbox Effect', link: '/guides/editing/lightbox-effect/' },
          ],
        },
        {
          label: 'Zoom',
          items: [
            { label: 'Manual Zoom', link: '/guides/zoom/manual/' },
            { label: 'Auto Zoom', link: '/guides/zoom/auto/' },
            { label: 'Disable Automatic Zoom', link: '/guides/zoom/disable-automatic-zoom/' },
          ],
        },
        {
          label: 'Preset',
          items: [{ label: 'Presets', link: '/guides/preset/create-preset/' }],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'theme-color',
            content: '#16A34A',
          },
        },
      ],
    }),
  ],
});
