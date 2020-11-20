import React from 'react';

// import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

export interface TeacherProps {
    id: number,
    avatar: string,
    bio: string,
    cost: string,
    name: string,
    subject: string,
    whatsapp: string
}

interface TeacherItemProps {
    teacher: TeacherProps
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    function handlerCreateNewConnection() {
        // api.post('connections', {
        //     user_id: teacher.id
        // });

        return;
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name}></img>
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>
                    Preço/hora
                <strong>R$ {teacher.cost}</strong>
                </p>
                <a
                    target="_blank" rel="noopener noreferrer"
                    href={`https://wa.me/55${teacher.whatsapp}?text= Olá, realizei a inscrição para sua aula de ${teacher.subject}.`}
                    onClick={handlerCreateNewConnection}>
                    <img alt="Whatsapp" />
                        Entrar em contato
                    </a>
            </footer>
        </article>
    )
}

export default TeacherItem;