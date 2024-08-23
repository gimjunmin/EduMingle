import ConCard from '@/components/consultantComponents/ConCard';
import ConTab from '@/components/consultantComponents/ConTab';
import CostCard from '@/components/consultantComponents/CostCard';

export default function Profile() {
  return (
    <div>
      <div className="bg-sub3 h-32 w-full" />
      <div className="flex justify-center">
        <div style={{ width: '850px' }}>
          <ConCard />
          <ConTab />
        </div>
        <div className="ml-8">
          <CostCard />
        </div>
      </div>
    </div>
  );
}
