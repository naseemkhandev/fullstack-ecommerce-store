const useHandleImageChange = (name, data, setData) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setData({
          ...data,
          [name]: reader.result,
        });
      };
    }
  };

  return { handleImageChange };
};

export default useHandleImageChange;
