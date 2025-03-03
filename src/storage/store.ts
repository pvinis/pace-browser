import { Tab, TabHistory } from "@/types";
import { atomWithStorage } from "@/utils/atomWithStorage";

const tabs = atomWithStorage<Tab[]>("tabs", []);
const tabsHistory = atomWithStorage<TabHistory[]>("tabHistory", []);
