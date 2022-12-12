import { useState } from 'react';
const useCheckBox = (initialValue = null) => {
  const [isChecked, setIsChecked] = useState(initialValue);

  const toggleCheckHandler = async (id) => {
    try {
      const body = {
        todo: inputContent.current.value,
        isCompleted: !isChecked,
      };
      const res = await updateTodo(body, id);
      setIsChecked((pre) => !pre);
      refetchFunc();
    } catch (error) {
      console.log('Error', error.message);
      alert(`다시 시도해주세요. ${error.message}`);
    }
  };

  return { isChecked, setIsChecked };
};

export default useCheckBox;
