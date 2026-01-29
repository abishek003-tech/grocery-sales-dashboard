import { format } from 'date-fns';

export default function Header() {
  const currentDate = new Date();
  const monthYear = format(currentDate, 'MMMM yyyy');

  return (
    <header className="bg-white border-b border-border px-4 md:px-8 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Fresh Market Grocery
            </h1>
            <p className="text-muted-foreground mt-1">Dashboard</p>
          </div>
          <div className="text-sm md:text-base text-muted-foreground font-medium">
            {monthYear}
          </div>
        </div>
      </div>
    </header>
  );
}
