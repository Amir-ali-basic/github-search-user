import React, { useContext } from 'react';
import { GithubContext } from '../context/context';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

const UserInfo = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { public_repos, followers, following, public_gists } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo className='icon' />,
      label: 'repositories',
      value: public_repos,
      color: 'yellow',
    },
    {
      id: 2,
      icon: <FiUsers className='icon' />,
      label: 'follwers',
      value: followers,
      color: 'yellow',
    },
    {
      id: 3,
      icon: <FiUserPlus className='icon' />,
      label: 'follwing',
      value: following,
      color: 'yellow',
    },
    {
      id: 4,
      icon: <GoGist className='icon' />,
      label: 'gists',
      value: public_gists,
      color: 'yellow',
    },
  ];
  return (
    <section className='section'>
      <Wrapper className='section-center'>
        {items.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </Wrapper>
    </section>
  );
};
const Item = ({ icon, label, value, color }) => {
  return (
    <article className='item'>
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};
const Wrapper = styled.section`
  display: grid;
  color: white;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    /* background: var(--bg-box); */
    background-image: linear-gradient(to right, #2ec8be, #57d89f);

    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #0f131f;
      color: #da4a91;
    }
    .green {
      background: #0f131f;
      color: var(--clr-primary-5);
    }
    .purple {
      background: #0f131f;
      color: #5d55fa;
    }
    .yellow {
      color: white;
    }
  }
`;

export default UserInfo;
