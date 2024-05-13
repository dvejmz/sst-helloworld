import { useUser } from "@clerk/nextjs"; 

const ProfilePage = () => {
  const { user } = useUser();
  return (
    <h1>Hello, {user?.fullName}!</h1>
  );
};
export default ProfilePage;
