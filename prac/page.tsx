'use client'
import React, { useState } from 'react';

const CreateComponent: React.FC = () => {
  // 상태 변수 설정
  const [formData, setFormData] = useState({
    // 필요한 필드에 대한 초기값 설정
    name: '',
    email: '',
    // 추가 필드가 있다면 여기에 추가
  });
  const [submittedData, setSubmittedData] = useState<string[]>([]); // 제출된 데이터 저장을 위한 상태 변수

  // 입력 양식 변경 핸들러
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 제출 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기서는 간단히 FormData를 출력하는 것으로 가정합니다.
    console.log('Form Data:', formData);
    // 제출된 데이터를 배열에 추가
    setSubmittedData([...submittedData, `Name: ${formData.name}`, `Email: ${formData.email}`]);
    // 입력 양식 초기화
    setFormData({
      name: '',
      email: '',
    });
    // 여기에 API 호출 등의 실제 Create 작업을 수행하는 로직을 추가할 수 있습니다.
    // 예를 들어, axios 또는 fetch를 사용하여 서버에 데이터를 보낼 수 있습니다.
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
          />
        </label>
        {/* 추가 필드가 있다면 여기에 추가 */}
        <button type="submit">Submit</button>
      </form>
      {/* 제출된 데이터 표시 */}
      <div>
        <h2>Submitted Data:</h2>
        <ul>
          {submittedData.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateComponent;
