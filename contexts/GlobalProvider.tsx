"use client";
import { PlanDTO } from "@/application/dtos/plan-dto";
import { User, UserLoginDTO } from "@/domain/models/User";
import { ValueDispatch } from "@/lib/types";
import { createContext, FC, useContext, useReducer } from "react";

type GlobalContextType = {
  state: {
    user: UserLoginDTO;
    userApi: User;
    planSelected: PlanDTO;
  };
  dispatch(obj: { type: string; value: Object }): void;
};

const GlobalContext = createContext<GlobalContextType>({
  state: {
    user: {
      document: "",
      phone: "",
      type_document: "",
    },
    userApi: {
      birthDay: "",
      name: "",
      lastName: "",
    },
    planSelected: {
      name: "",
      price: 0,
      priceDiscount: 0,
      description: [],
      age: 0,
    },
  },
  dispatch: (obj: { type: string; value: Object }) => {},
});

interface Props {
  children: React.ReactNode;
}
const GlobalProvider: FC<Props> = ({ children }) => {
  const initialState = {
    user: {},
    userApi: {},
  };

  const globalReducer = (state: any, action: any) => {
    switch (action.type) {
      case ValueDispatch.addUser:
        return { ...state, user: action.value };
      case ValueDispatch.addUserApi:
        return { ...state, userApi: action.value };
      case ValueDispatch.selectPlan:
        return { ...state, planSelected: action.value };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  const ctx = useContext(GlobalContext);
  if (!ctx)
    throw new Error("useGlobalContext must be used inside GlobalProvider");
  return ctx;
}

export default GlobalProvider;
