/* eslint-disable react-hooks/exhaustive-deps */
import styles from './home.module.scss';
import Header from '../components/Header/header';
import { HeaderContext } from '../components/contexts/headerContext';
import { useEffect, useState } from 'react';
import { getMake, getModel, getVersion, getCars } from '../bloc/headerBloc';

function App() {
  const [makeList, setMakeList] = useState([]);
  const [makeId, setMakeId] = useState(0);
  const [modelList, setModelList] = useState([]);
  const [modelId, setModelId] = useState([]);
  const [versionList, setVersionList] = useState([]);
  const [versionId, setVersionId] = useState([]);
  const [carsList, setCarsList] = useState([]);

  useEffect(async () => {
    await getMakes();
    await getCars().then(result => setCarsList(result));
  }, [])

  async function getMakes() {
    await getMake().then(result => {
      setMakeList(result);
    });
  }

  async function setMake(id) {
    setModelId(0);
    setVersionId(0);
    setVersionList([]);
    setMakeId(id);
    await getModel(id).then(result => {
      setModelList(result);
    });
  }

  async function setModel(id) {
    setModelId(id);
    setVersionId(0);
    setVersionList([]);
    await getVersion(id).then(result => setVersionList(result));
  }

  async function clearFilters() {
    setModelList([]);
    setModelId(0);
    setMakeList([]);
    setMakeId(0);
    setVersionList([]);
    setVersionId(0);
    await getMakes();
  }

  return (
    <HeaderContext.Provider 
      value={{
        makeList,
        setMake,
        makeId,
        modelList,
        setModel,
        modelId,
        versionId,
        versionList,
        setVersionId,
        carsList,
        clearFilters
      }}>
      <div className={styles.mainContainer}>
        <Header/>
      </div>
    </HeaderContext.Provider>
  );
}

export default App;
