import React from "react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import warningIcon from "../../assets/images/icons/warning.svg";
import "./styles.css";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrivel que você quer dar aulas"
        description="O primeiro passo é preencher este formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <TextArea name="bio" label="Biografia" />
        </fieldset>
        <fieldset>
          <legend>Sobre a Aula</legend>

          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Física", label: "Física" },
              { value: "Matemática", label: "Matemática" },
              { value: "Portugês", label: "Portugês" },
              { value: "Inglês", label: "Inglês" },
              { value: "Quimica", label: "Quimica" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Computação Quântica", label: "Computação Quântica" },
            ]}
          />
          <Input name="cost" label="Custo da sua Hora/Aula" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar Cadastro</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
