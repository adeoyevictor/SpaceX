import React, { createContext, useState, ReactNode } from 'react'
import { useNavigate} from 'react-router-dom'

interface FormData {
  email: string;
  password: string;
}

interface UserContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleFormSubmit: (event: React.FormEvent) => void;
  user: null | Record<string, unknown>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = (props) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState<FormData>({
        email:'',
        password:''
    })
    const [user, setUser] = useState<null | Record<string, unknown>>(null);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (formData.email && formData.password){
        setUser({})
        setTimeout(()=>{
            setUser(null)
        }, 120000)
        setFormData({
            email: '',
            password: '',
        });
        navigate('/')
    }
    else{
        return
    }

    
  };

  return (
    <UserContext.Provider value={{formData, setFormData, handleFormSubmit, user}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContext