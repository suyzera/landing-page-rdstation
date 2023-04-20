import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./Main.module.scss";
import BodyMd from "@/app/components/Typograph/BodyMd";
import HeadingMd from "@/app/components/Typograph/HeadingMd";
import HeadingXs from "@/app/components/Typograph/HeadingXs";
import HeadingCustom from "@/app/components/Typograph/HeadingCustom";
import LabelMd from "@/app/components/Typograph/LabelMd";
import HighlightButton from "@/app/components/Buttons/Highlight";
import BodyXs from "@/app/components/Typograph/BodyXs";
import FormLabelMd from "@/app/components/Typograph/FormLabelMd";
import LinkText from "@/app/components/Typograph/Link";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: "400" });

const Main = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [site, setSite] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("Passwords must match");
      return;
    }

    const response = await fetch(
      "https://rdstation-signup-psel.herokuapp.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          position,
          password,
          site,
        }),
      }
    );

    if (response.ok) {
      setShowPopup(true);
      setName("");
      setEmail("");
      setPhone("");
      setPosition("");
      setPassword("");
      setConfirmPassword("");
      setSite("");
    }
  };

  const handleTelephoneChange = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, "");
    const mask = value.length > 11 ? "(99) 99999-9999" : "(99) 9999-9999";
    let i = 0;
    let newValue = "";
    for (const c of mask) {
      if (c === "9") {
        if (i < value.length) {
          newValue += value[i++];
        } else {
          break;
        }
      } else {
        newValue += c;
      }
    }
    setPhone(newValue);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

    const hasUppercase = /[A-Z]/.test(e.target.value);
    const hasLowercase = /[a-z]/.test(e.target.value);
    const hasNumber = /[0-9]/.test(e.target.value);

    if (
      e.target.value.length < 6 ||
      e.target.value.length > 10 ||
      !hasUppercase ||
      !hasLowercase ||
      !hasNumber
    ) {
      setPasswordError(
        "A senha deve ter de 6 a 10 caracteres e conter pelo menos uma letra maiúscula, uma letra minúscula e um número"
      );
    } else {
      setPasswordError("");
    }
  };

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const handleShowPasswordConfirmClick = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.cut}></div>

        <div className={styles.titleContainer}>
          <div className={styles.firstTitleContainer}>
            <HeadingMd>
              Gere mais <span style={{ color: "#19C1CE" }}>oportunidades</span>{" "}
              para seu negócio
            </HeadingMd>
          </div>
          <BodyMd>
            O RD Station Marketing é um software para sua empresa fazer
            campanhas melhores, nutrir Leads, gerar oportunidades comerciais
            qualificadas e alcançar mais resultados.
          </BodyMd>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <div className={styles.formTitle}>
                <HeadingCustom style={{ textAlign: "center" }}>
                  Comece seus 10 dias de teste grátis do RD Station Marketing!
                </HeadingCustom>
                <FormLabelMd>
                  Não precisa cadastrar cartão de crédito. 😉
                </FormLabelMd>
              </div>
              <LabelMd htmlFor="name">Diga, qual seu nome?</LabelMd>
              <input
                className={styles.input}
                type="text"
                id="name"
                value={name}
                placeholder="Insira seu nome"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <LabelMd htmlFor="email">Seu email de trabalho</LabelMd>
              <input
                className={styles.input}
                type="text"
                id="email"
                value={email}
                placeholder="Insira seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <LabelMd htmlFor="phone">Seu telefone</LabelMd>
              <input
                className={styles.input}
                type="text"
                id="phone"
                value={phone}
                placeholder="Insira seu número de telefone com DDD"
                onChange={handleTelephoneChange}
                maxLength="15"
              />
            </div>

            <div>
              <LabelMd htmlFor="position">Seu cargo de ocupação</LabelMd>
              <select
                className={styles.select}
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              >
                <option value="">Select your position</option>
                <option value="Sócio(a) / CEO / Proprietário(a)">
                  Sócio(a) / CEO / Proprietário(a)
                </option>
                <option value="Diretor(a) de Vendas">
                  Diretor(a) de Vendas
                </option>
                <option value="Diretor(a) de Marketing">
                  Diretor(a) de Marketing
                </option>
                <option value="Diretor(a) Outras Áreas">
                  Diretor(a) Outras Áreas
                </option>
                <option value="Gerente de Marketing">
                  Gerente de Marketing
                </option>
                <option value="Gerente de Vendas">Gerente de Vendas</option>
                <option value="Coordenador(a)/Supervisor(a) de Marketing">
                  Coordenador(a)/Supervisor(a) de Marketing
                </option>
                <option value="Coordenador(a)/Supervisor(a) de Vendas">
                  Coordenador(a)/Supervisor(a) de Vendas
                </option>
                <option value="Analista/Assistente de Marketing">
                  Analista/Assistente de Marketing
                </option>
                <option value="Analista/Assistente de Vendas">
                  Analista/Assistente de Vendas
                </option>
                <option value="Vendedor(a) / Executivo(a) de Contas">
                  Vendedor(a) / Executivo(a) de Contas
                </option>
                <option value="Estudante">Estudante</option>
                <option value="Outros Cargos">Outros Cargos</option>
              </select>
            </div>

            <div style={{ position: "relative" }}>
              <LabelMd htmlFor="password">Password:</LabelMd>
              <input
                className={styles.input}
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
              {showPassword ? (
                <FaEye
                  className={styles.iconPassword}
                  onClick={handleShowPasswordClick}
                />
              ) : (
                <FaEyeSlash
                  className={styles.iconPassword}
                  onClick={handleShowPasswordClick}
                />
              )}
              {passwordError && <BodyXs color="red">{passwordError}</BodyXs>}
            </div>

            <div style={{ position: "relative" }}>
              <LabelMd htmlFor="confirm-password">Crie sua senha:</LabelMd>
              <input
                className={styles.input}
                type={showPasswordConfirm ? "text" : "password"}
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {showPasswordConfirm ? (
                <FaEye
                  className={styles.iconPassword}
                  onClick={handleShowPasswordConfirmClick}
                />
              ) : (
                <FaEyeSlash
                  className={styles.iconPassword}
                  onClick={handleShowPasswordConfirmClick}
                />
              )}

              {password !== confirmPassword && (
                <BodyXs color="red">As senhas devem ser iguais</BodyXs>
              )}
            </div>

            <LabelMd htmlFor="site">Qual o site da sua empresa?</LabelMd>
            <label className={`${styles.label} ${nunito.className}`}>
              <input
                className={styles.inputRadio}
                type="radio"
                value="option1"
                checked={radioValue === "option1"}
                onChange={(e) => {
                  setSite("");
                  setRadioValue(e.target.value);
                }}
              />
              Meu site é
            </label>

            {radioValue === "option1" && (
              <input
                className={styles.input}
                placeholder="Insira o endereço do seu site"
                id="site"
                value={site}
                type="text"
                onChange={(e) => setSite(e.target.value)}
              />
            )}

            <label className={`${styles.label} ${nunito.className}`}>
              <input
                className={styles.inputRadio}
                type="radio"
                value="Ainda não tenho site"
                checked={radioValue === "Ainda não tenho site"}
                onChange={(e) => {
                  setSite(e.target.value);
                  setRadioValue(e.target.value);
                }}
              />
              Ainda não tenho site
            </label>

            <ul className={styles.ul}>
              <li className={styles.li}>
                <FormLabelMd>
                  Ao criar minha conta estou de acordo com os{" "}
                  <LinkText href="https://legal.rdstation.com/pt-BR/rdstation-services-agreement/">
                    termos de uso
                  </LinkText>{" "}
                  do software e{" "}
                  <LinkText href="https://legal.rdstation.com/pt/privacy-policy/">
                    política de privacidade
                  </LinkText>
                  .
                </FormLabelMd>
              </li>
              <li className={styles.li}>
                <FormLabelMd>
                  Ao preencher o formulário, concordo em receber comunicações de
                  acordo com meus interesses.
                </FormLabelMd>
              </li>
              <li className={styles.li}>
                <FormLabelMd>
                  *Você pode alterar suas permissões de comunicação a qualquer
                  tempo.
                </FormLabelMd>
              </li>
            </ul>
            <HighlightButton
              disabled={
                !name ||
                !email ||
                !phone ||
                !position ||
                !site ||
                !password ||
                !confirmPassword
              }
              type="submit"
            >
              criar minha conta
            </HighlightButton>
            {!showPopup && (
              <BodyXs>Obrigado por fazer seu cadastro conosco!</BodyXs>
            )}
          </form>
        </div>

        <section className={styles.rdMarketing}>
          <div className={styles.rdMarketingContainer}>
            <div className={styles.cut}></div>
            <HeadingXs color="#FFF">
              Estaremos juntos desde o primeiro passo!
            </HeadingXs>
            <BodyMd color="#FFF">
              Se você ainda não sabe como extrair o máximo das ações digitais,
              não tem problema. O <strong>RD Station Marketing</strong> é mais
              que uma ferramenta, nos importamos com os seus resultados.
            </BodyMd>
            <BodyMd color="#FFF">
              <strong>Estaremos com você do planejamento até a prática!</strong>
            </BodyMd>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
