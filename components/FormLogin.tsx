"use client";
import React from "react";
import styles from "./FormLogin.module.scss";
import CheckBox from "@/components/CheckBox";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import Input from "./Input";
import { UserApiRepository } from "@/infraestructure/UserApiRepository";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/contexts/GlobalProvider";
import { ValueDispatch } from "@/lib/types";

const INITIAL_VALUES = {
  type_document: "DNI",
  document: "",
  phone: "",
  tyc_privacy: false,
  tyc_communication: false,
};

const schema = yup.object().shape({
  type_document: yup.string().required("*tipo requerido"),
  document: yup
    .string()
    .required("*Número de documento requerido")
    .when("type_document", {
      is: "DNI",
      then: (schema: any) =>
        schema
          .matches(/^7/, "El primer caractér debe ser 7")
          .matches(/\d{8}$/, "Debe tener 8 dígitos")
          .required(),
      otherwise: (schema) => schema.required(),
    }),
  phone: yup
    .string()
    .required("*Número de teléfono requerido")
    .matches(/^9/, "El primer caractér debe ser 9"),
  tyc_privacy: yup.boolean().oneOf([true], "Aceptar tyc"),
  tyc_communication: yup.boolean().oneOf([true], "aceptar tyc"),
});

const FormLogin = () => {
  const router = useRouter();
  const { dispatch } = useGlobalContext();
  const repository = new UserApiRepository();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: INITIAL_VALUES,
    resolver: yupResolver(schema),
  });

  const saveUser: SubmitHandler<any> = handleSubmit(async (data) => {
    try {
      setLoading(true);
      setError("");
      const userResponse = await repository.loginUser(data);
      dispatch({ type: ValueDispatch.addUser, value: userResponse });
      router.push("/plans");
    } catch {
      setError("Credenciales incorrectas");
    } finally {
      setLoading(false);
    }
  });
  return (
    <form className={styles["login__form"]} onSubmit={handleSubmit(saveUser)}>
      <div className={styles["login__form--divider"]}></div>
      <p>
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría. 100% online.
      </p>
      <div className={styles["login__form--dni"]}>
        <div className={styles["login__form--select"]}>
          <select id="type_document" {...register("type_document")}>
            <option value="DNI">DNI</option>
            <option value="RUC">RUC</option>
          </select>
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 14.8937L3.49377 8.38115L5.25628 6.61865L10 11.3562L14.7438 6.61865L16.5063 8.38115L10 14.8937Z"
                fill="#03050F"
              />
            </svg>
          </div>
        </div>
        <Input
          className={styles["login__form--document"]}
          placeholder="Nro. de documento"
          name="document"
          register={register}
        />
      </div>
      {errors.document?.message && (
        <span className={styles["login__form--error"]}>
          {errors.document?.message}
        </span>
      )}
      <Input
        className={styles["login__form--phone"]}
        placeholder="Celular"
        name="phone"
        error={errors.phone?.message}
        register={register}
      />

      <div className={styles["login__form--tyc"]}>
        <CheckBox
          label="Acepto lo Política de Privacidad"
          register={register}
          name="tyc_privacy"
          error={errors.tyc_privacy?.message}
        />
        <CheckBox
          label="Acepto la Política Comunicaciones Comerciales"
          register={register}
          name="tyc_communication"
          error={errors.tyc_communication?.message}
        />
        <Link href="#">Aplican Términos y Condiciones.</Link>
      </div>
      <Button
        onSubmit={handleSubmit(saveUser)}
        disabled={loading}
        className={`${styles["login__submit"]} ${
          loading ? styles[`login__submit--loading`] : ""
        }`}
      >
        {loading ? "Cotizando..." : "Cotiza aquí"}
      </Button>
      {error && <span className={styles["login__form--error"]}>{error}</span>}
    </form>
  );
};

export default FormLogin;
