import { SearchIcon } from '@/assets';

interface Props {
  placeholder?: string;
  autoFocus?: boolean;
  setQuery: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({
  placeholder = 'Поиск',
  autoFocus = false,
  setQuery,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };
  return (
    <div className='relative'>
      <SearchIcon className='absolute left-2 top-1/2 transform -translate-y-1/2 fill-gray-400 size-5' />
      <input
        type='text'
        placeholder={placeholder}
        className='pr-2 pl-8 py-1 bg-gray-100 rounded-lg focus:outline-0 w-full'
        autoFocus={autoFocus}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
