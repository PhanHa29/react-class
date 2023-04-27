import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { Modal } from 'react-modal';
import  Reup  from './Reup';

type FormInputs = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
  role: "student" | "teacher";
  favorite: string[];
  address: "Bac Giang" | "Ha Noi" | "Nghe An";
  birthday: string;
  // image: File;
};

function UserForm() {
  const { register, handleSubmit } = useForm<FormInputs>();
  const [userData, setUserData] = useState<FormInputs>({firstName: '', lastName: '', password: '', email: '', phone: '',role: 'student',favorite:[], address: 'Bac Giang', birthday:''});

  const onSubmit = (data: FormInputs) => {
    console.log(`First name: ${data.firstName}, Last name: ${data.lastName}, Password: ${data.password}, Email: ${data.email}, Phone: ${data.phone}, Role: ${data.role}, Favorite: ${data.favorite ? data.favorite.join(", ") : ""}, Address: ${data.address}, Birthday: ${data.birthday}`);
    // const { image, ...rest } = data;
    setUserData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>
        First Name: <br />
        <input type="text" placeholder='Input your telephone number' required {...register('firstName')} />
      </p>
      <p>
        Last Name: <br />
        <input type="text" {...register('lastName')} />
      </p>
      <p>
        Password: <br />
        <input type="password" {...register('password')} />
      </p>
      <p>
        Email: <br />
        <input type="email" {...register('email')} />
      </p>
      <p>
        Telephone number: <br />
        <input type="text" {...register('phone')} />
      </p>
      <p>
        Input Object: <br />
        <label>
          <input type="radio" value="student" {...register('role')} />
          Student
        </label>
        <label>
          <input type="radio" value="teacher" {...register('role')} />
          Teacher
        </label>
      </p>
      <p>
        Favorite: <br />
        <label>
          <input type="checkbox" value="Badminton" {...register('favorite')} />
          Badminton
          <input type="checkbox" value="Volleyball" {...register('favorite')} />
          Volleyball
          <input type="checkbox" value="Football" {...register('favorite')} />
          Football
        </label>
      </p>
      <p>
        Address: <br />
          <select {...register('address')}>
            <option value="Bắc Giang">Bắc Giang</option>
            <option value="Hà Nội">Hà Nội</option>
            <option value="Nghệ An">Nghệ An</option>
          </select>
      </p>
      <p>
        Birthday: <br />
        <input type="date" {...register('birthday')} />
      </p>
      {/* <p>
        Image: <br />
        <input type="file" accept="image/*" {...register('image')} />
      </p> */}

      <button type="submit">Submit</button>
      {Object.keys(userData).length > 0 && <Reup userData={userData} />}
    </form>
  );
}

export default UserForm;
