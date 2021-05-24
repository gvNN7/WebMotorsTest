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
    await getMake().then(result => {
      setMakeList(result);
      setMake(result[0].id);
    });
    await getCars().then(result => setCarsList(result));
  }, [])

  async function setMake(id) {
    setMakeId(id);
    await getModel(id).then(result => {
      setModelList(result);
      setModel(result[0].id);
    });
  }

  async function setModel(id) {
    setModelId(id);
    await getVersion(id).then(result => setVersionList(result));
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
        carsList
      }}>
      <div className={styles.mainContainer}>
        <Header/>
      </div>
    </HeaderContext.Provider>
  );
}

export default App;
