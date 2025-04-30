import React from 'react';

type DataItem = {
  id: number;
  name: string;
  amount: number;
  date: string;
};

const data_1: DataItem[] = [
  { id: 1, name: 'Agus', amount: 1000, date: '2025-01-01 08:00:00' },
  { id: 2, name: 'Bejo', amount: 2000, date: '2025-01-02 08:00:00' },
  { id: 3, name: 'Cindy', amount: 3100, date: '2025-01-03 09:00:00' },
  { id: 4, name: 'Daud', amount: 4000, date: '2025-01-04 08:00:00' },
  { id: 5, name: 'Eko', amount: 5000, date: '2025-01-05 08:00:00' },
];

const data_2: DataItem[] = [
  { id: 1, name: 'Agus', amount: 1000, date: '2025-01-01 08:00:00' },
  { id: 2, name: 'Bejo', amount: 2500, date: '2025-01-02 08:00:00' },
  { id: 3, name: 'Cindy', amount: 3000, date: '2025-01-03 08:00:00' },
  { id: 4, name: 'Daud', amount: 4000, date: '2025-01-04 10:00:00' },
  { id: 5, name: 'Eko', amount: 5000, date: '2025-01-05 08:00:00' },
];

const ArrayComparer: React.FC = () => {
  const sameItems: DataItem[] = [];
  const differentItems: { id: number; differences: string[] }[] = [];

  for (let i = 0; i < data_1.length; i++) {
    const item1 = data_1[i];
    const item2 = data_2.find((x) => x.id === item1.id);
    if (!item2) continue;

    const diffKeys: string[] = [];

    for (const key in item1) {
      if (key !== 'id' && item1[key as keyof DataItem] !== item2[key as keyof DataItem]) {
        diffKeys.push(key);
      }
    }

    if (diffKeys.length === 0) {
      sameItems.push(item1);
    } else {
      differentItems.push({ id: item1.id, differences: diffKeys });
    }
  }

  return (
    <div>
      <h2>Data Array 1</h2>
      <ul>
        {data_1.map((item) => (
          <li key={item.id}>
            ID: {item.id}, Name: {item.name}, Amount: {item.amount}, Date: {item.date}
          </li>
        ))}
      </ul>

      <h2>Data Array 2</h2>
      <ul>
        {data_2.map((item) => (
          <li key={item.id}>
            ID: {item.id}, Name: {item.name}, Amount: {item.amount}, Date: {item.date}
          </li>
        ))}
      </ul>
      <h2>Data yang Berbeda</h2>
      {differentItems.length > 0 ? (
        <ul>
          {differentItems.map((item) => (
            <li key={item.id}>
              ID {item.id}, perbedaan: {item.differences.join(', ')}
            </li>
          ))}
        </ul>
      ) : (
        <p>Tidak ada perbedaan</p>
      )}
    </div>
  );
};

export default ArrayComparer;
