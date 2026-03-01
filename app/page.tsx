import { ChartBarLabelCustom } from "@/components/ChartBarLabelCustom";
import "./globals.css";
import { ChartAreaInteractive } from "@/components/ChartAreaInteractive";
import { ChartLineLabel } from "@/components/ChartLineLabel";
import { ChartRadarLegend } from "@/components/ChartRadarLegend";
import CardList from "@/components/CardList";
import ToDoList from "@/components/ToDoList";

export default function Home() {
  return (
    <div>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-4">
          <ChartAreaInteractive />
        </div>
        <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2">
          <ChartBarLabelCustom />
        </div>
        <div className="bg-primary-foreground rounded-lg p-2">
          <CardList title="latestTransactions" />
        </div>
        <div className="bg-primary-foreground rounded-lg p-4 ">
          <ChartRadarLegend />
        </div>
        <div className="bg-primary-foreground rounded-lg p-4">
          <ToDoList />
        </div>
        <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2">
          <ChartLineLabel />
        </div>
        <div className="bg-primary-foreground rounded-lg p-4 ">
          <CardList title="popularContent" />
        </div>
      </main>
    </div>
  );
}
