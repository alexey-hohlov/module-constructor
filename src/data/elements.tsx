import {
  AudioIcon,
  ButtonIcon,
  CalloutIcon,
  CodeIcon,
  EmbedIcon,
  FileIcon,
  ImageIcon,
  PresentationIcon,
  TableIcon,
  TextIcon,
  VideoIcon,
  TitleIcon,
} from '@/assets';

const className = 'fill-teal-600 size-11';

export const elements = [
  {
    title: 'Заголовок',
    icon: <TitleIcon className={className} />,
    type: 'title',
    disabled: false,
  },
  {
    title: 'Текст',
    icon: <TextIcon className={className} />,
    type: 'text',
    disabled: false,
  },
  {
    title: 'Видео',
    icon: <VideoIcon className={className} />,
    type: 'video',
    disabled: true,
  },
  {
    title: 'Картинка',
    icon: <ImageIcon className={className} />,
    type: 'image',
    disabled: false,
  },

  {
    title: 'Файл',
    icon: <FileIcon className={className} />,
    type: 'file',
    disabled: true,
  },
  {
    title: 'Презентация',
    icon: <PresentationIcon className={className} />,
    type: 'presentation',
    disabled: true,
  },
  {
    title: 'Аудио',
    icon: <AudioIcon className={className} />,
    type: 'audio',
    disabled: true,
  },
  {
    title: 'Таблица',
    icon: <TableIcon className={className} />,
    type: 'table',
    disabled: true,
  },
  {
    title: 'Callout',
    icon: <CalloutIcon className={className} />,
    type: 'callout',
    disabled: true,
  },
  {
    title: 'Кнопка',
    icon: <ButtonIcon className={className} />,
    type: 'button',
    disabled: true,
  },
  {
    title: 'Embed',
    icon: <EmbedIcon className={className} />,
    type: 'embed',
    disabled: true,
  },
  {
    title: 'Код',
    icon: <CodeIcon className={className} />,
    type: 'code',
    disabled: false,
  },
];
