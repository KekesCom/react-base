import { useEffect, useState } from 'react';

import { teachersImages } from '@/assets/images';
import { Select } from '@/components/select';
import { useWindowSize } from '@/hooks/useWindowSize';

import { Social } from '../modal-content/components/social';
import { TabSection } from './components/tab-section';
import { Tabs } from './components/tabs';

import styles from './modal-content.module.scss';

export const TeacherModalContent = ({ teacher }) => {
  const [activeTab, setActiveTab] = useState(teacher.tabs[0]);
  const [activeTabContent, setActiveTabContent] = useState(teacher.tabs[0].data);

  const { isMobile } = useWindowSize();

  const options = teacher.tabs.map((tab) => ({
    value: tab,
    label: tab.title,
  }));

  useEffect(() => {
    setActiveTabContent(activeTab.data);
  }, [activeTab]);

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
        <Select options={options} value={activeTab} onChange={setActiveTab} />
      ) : (
        <Tabs options={options} activeTab={activeTab} onClick={setActiveTab} />
      )}

      <div className={styles.tabContent}>
        {activeTabContent.map((section, index) => (
          <TabSection key={index} section={section} />
        ))}
      </div>
    </div>
  );
};
