import { useMemo, useState } from 'react';

import { ElementItem, SearchBar } from '@/components';
import { elements } from '@/data/elements.tsx';

interface Props {
  onClose: () => void;
}

const ElementSelect: React.FC<Props> = ({ onClose }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const filteredElements = useMemo(() => {
    return elements.filter(element => {
      return element.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [searchQuery]);

  return (
    <>
      <SearchBar
        setQuery={handleSearch}
        placeholder='Поиск по элементу'
        autoFocus={true}
      />
      <div className='h-[calc(100%-40px)] overflow-y-auto'>
        <ul className='py-4 flex gap-4 flex-wrap'>
          {filteredElements.map(item => (
            <li key={item.title}>
              <ElementItem element={item} onClose={onClose} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ElementSelect;
