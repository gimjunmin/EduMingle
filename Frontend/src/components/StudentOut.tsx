import { useState } from 'react';
import { useForm } from 'react-hook-form';

// export default function StudentOut() {

export default function StudentOut() {
  // useState 훅을 사용하여 activities 상태 변수와 setActivities 함수를 선언합니다.
  // activities 변수는 교외활동 정보를 담고 있는 배열이며, 초기값으로 하나의 빈 객체를 가집니다.
  const [activities, setActivities] = useState([{ title: '', duration: '', content: '' }]);

  // useForm 훅을 사용하여 폼 관련 기능을 사용할 수 있게 합니다.
  // register, handleSubmit 함수를 추출합니다.
  const { register, handleSubmit } = useForm();

  // '+' 버튼을 클릭하면 실행되는 함수입니다.
  // activities 배열에 새로운 빈 객체를 추가하여 상태를 업데이트합니다.
  const addActivity = () => {
    setActivities([...activities, { title: '', duration: '', content: '' }]);
  };


  return (
    // onSubmit 함수를 handleSubmit으로 연결하여 폼 제출 시 onSubmit 함수가 실행되도록 합니다.
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
      {/* activities 배열을 map 함수로 순회하며 각 활동에 대한 입력 필드를 렌더링합니다. */}
      {activities.map((activity, index) => (
        <div key={index} className="mb-4">
          {/* register 함수를 사용하여 각 입력 필드를 폼 데이터에 연결합니다. */}
          <input
            type="text"
            {...register(`activities[${index}].title`, { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-bold"
            placeholder="교외활동 제목"
          />

          <input
            type="text"
            {...register(`activities[${index}].duration`, { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="교외활동 기간"
          />

          <textarea
            {...register(`activities[${index}].content`, { required: true })}
            className="shadow appearance-none border rounded w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="교외활동 내용"
          ></textarea>
        </div>
      ))}

      <div className="flex items-center justify-between">
        {/* '+' 버튼을 클릭하면 addActivity 함수가 실행되어 새로운 활동 입력 필드가 추가됩니다. */}
        <button type="button" onClick={addActivity} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          +
        </button>
        {/* 제출 버튼을 클릭하면 폼이 제출되고 onSubmit 함수가 실행됩니다. */}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          제출
        </button>
      </div>
    </form>
  );
};

