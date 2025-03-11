import { useState } from 'react';

import { teachersImages } from '@/assets/images';
import { useWindowSize } from '@/hooks/useWindowSize';

import { TabSection } from './components/tab-section';
import { Tabs } from './components/tabs';
import { Select } from './select';
import { Social } from './social';

import styles from './modal-content.module.scss';

export const ModalContent = ({ teacher }) => {
  const { isMobile } = useWindowSize();

  const [activeTab, setActiveTab] = useState(teacher.tabs[0]?.name || '');

  const options = teacher.tabs.map((tab) => ({
    value: tab.name,
    label: tab.title,
  }));

  const activeTabData = teacher.tabs.find((tab) => tab.name === activeTab);

  return (
    <div className={styles.modalContentWrapper}>
      <div className={styles.teacherHeader}>
        <img
          className={styles.teacherImage}
          src={teachersImages[teacher.imageName]}
          alt={teacher.name}
        />
        <div className={styles.teacherInfo}>
          <h2 className={styles.teacherName}>{teacher.name}</h2>
          <p className={styles.teacherDesc}>{teacher.desc}</p>
          <Social links={teacher.links} />
        </div>
      </div>

      {isMobile ? (
        <Select options={options} value={activeTab} onChange={(value) => setActiveTab(value)} />
      ) : (
        <Tabs options={options} activeTab={activeTab} onChange={setActiveTab} />
      )}

      <div className={styles.tabContent}>
        {activeTabData &&
          activeTabData.data.map((section, index) => <TabSection key={index} section={section} />)}
      </div>
    </div>
  );
};
