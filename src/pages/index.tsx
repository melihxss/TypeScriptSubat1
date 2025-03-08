import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  // Başlangıçta users state'ini null olarak ayarlıyoruz.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [users, setUsers] = useState<any | null>(null);

  // API'den kullanıcıyı almak için fonksiyon
  const getUser = () => {
    const randomId = Math.floor(Math.random() * 10 + 1);
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${randomId}`)
      .then((response) => {
        setUsers(response.data); // Gelen veriyi state'e aktar
      })
      .catch((error) => {
        console.log("Veri çekerken bir hata oluştu.", error);
      });
  };

  useEffect(() => {
    getUser();
  }, []); 

  if (!users) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      <div
        key={users.id}
        className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white"
      >
        <div className="px-6 py-4">
          {/* Kullanıcı İsmi */}
          <div className="font-bold text-xl text-black mb-2">{users.name}</div>
          <p className="text-gray-700 text-base">
            <strong>Email:</strong> {users.email}
          </p>
          <p className="text-gray-700 text-base">
            <strong>Phone:</strong> {users.phone}
          </p>
          <p className="text-gray-700 text-base">
            <strong>Website:</strong> {users.website}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button
            onClick={getUser}
            className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer"
          >
            Kullanıcı al
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;