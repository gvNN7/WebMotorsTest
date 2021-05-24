import { useContext } from 'react';
import Car from '../Car/car';
import { HeaderContext } from '../contexts/headerContext';
import styles from './header.module.scss';

function Header() {
  const { 
    makeList,
    setMake,
    makeId,
    modelList,
    setModel,
    modelId,
    versionId,
    versionList,
    setVersionId
  } = useContext(HeaderContext);

  return (
    <div className={styles.mainContainer}>
      <header>
        <img src="./webmotors.svg" alt="Logo Webmotors"/>

        <div className={styles.tabWrapper}>
          <div className={styles.tabParent}>

            <div className={styles.tab}>
              <div className={styles.icon}>
                <img src="icon-search-car.svg" alt="Pesquisar Carro"/>
              </div>
              <div className={styles.textContainer}>
                <span>COMPRAR</span>
                <span>CARROS</span>
              </div>
            </div>
            <div className={styles.tab}>
              <div className={styles.icon}>
                <img src="icon-search-bike.svg" alt="Pesquisar Carro"/>
              </div>
              <div className={styles.textContainer}>
                <span>COMPRAR</span>
                <span>MOTOS</span>
              </div>
            </div>
          </div>

          <button>
            <span>Vender meu carro</span>
          </button>
        </div>
      </header>
      
      <div className={styles.boxWrapper}>
        <div className={styles.box}>
          <div className={styles.firstRow}>
            <div className={styles.checkBoxWrapper}>
              <input type="checkbox" defaultChecked/>          
              <span>Novos</span>
            </div>
            <div className={styles.checkBoxWrapper}>
              <input type="checkbox"/>          
              <span>Usados</span>
            </div>
          </div>
          <div className={styles.secondRow}>
            <select size={1}
              className={styles.selectWhere}>
              <option defaultValue selected disabled>Onde: Selecione um local</option>
              <option>São Paulo</option>
              <option>Rio de Janeiro</option>
              <option>Espirito Santo</option>
            </select>
            <select size={1}
              className={styles.selectRadius}>
              <option defaultValue selected disabled>Raio: 100km</option>
              <option>200km</option>
              <option>300km</option>
              <option>400km+</option>
            </select>
            <select size={1}
              prefix="Marca: "
              className={styles.selectMake}
              value={makeId}
              onChange={(e) => setMake(e.target.value)}>
              <option defaultValue selected disabled>Marca: Todas</option>
              { makeList.map((marca, index) => <option key={index} value={marca.id}>{marca.name}</option>) }
            </select>
            <select size={1}
              placeholder="Modelo: "
              className={styles.selectModel}
              value={modelId !== undefined ? 0 : modelId}
              onChange={(e) => setModel(e.target.value)}>
              <option defaultValue selected disabled>Modelo: Todos</option>
              { modelList.map((modelo, index) => <option key={index} value={modelo.id}>{modelo.name}</option>) }
            </select>
          </div>
          <div className={styles.thirdRow}>
            <select 
              size={1}
              prefix="Ano Desejado: "
              className={styles.selectYear}>
              <option defaultValue selected disabled>Ano Desejado</option>
              <option>2017</option>
              <option>2018</option>
              <option>2019</option>
              <option>2020</option>
              <option>2021</option>
            </select>
            <select 
              size={1}
              defaultValue={1}
              className={styles.selectPrice}>
              <option defaultValue selected disabled>Faixa de preço</option>
              <option>R$ 0,00 - R$ 10.000,00</option>
              <option>R$ 10.000,00 - R$ 20.000,00</option>
              <option>R$ 20.000,00 - R$ 30.000,00</option>
              <option>R$ 40.000,00 - R$ 50.000,00</option>
              <option>R$ 60.000,00 - R$ 70.000,00</option>
              <option>R$ 70.000,00+</option>
            </select>
            <select size={1}
              placeholder="Modelo: "
              className={styles.selectVersion}
              value={versionId}
              onChange={(e) => setVersionId(e.target.value)}>
              <option defaultValue selected disabled>Versão: Todas</option>
              { versionList.map((versao, index) => <option key={index} value={versao.id}>{versao.name}</option>) }
            </select>
          </div>
          <div className={styles.options}>
            <span className={styles.advancedSearch}>{'›'} Busca Avançada</span>
            <div>
              <span>Limpar filtros</span>
              <button>
                <span>VER OFERTAS</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Car/>
    </div>
  );
}

export default Header;
