import {
  AdExpect,
  AdModule,
  AdModules,
  AdRegBased,
  AdRegister,
  AdRegistier,
  AdTools,
} from "admister";
import { QinTool } from "qin_case";
import { registry as city_regy } from "./ad-city";

const base = QinTool.qinpel.chief.loadConfig(QinTool.qinpel.our.names.QinBaseSelected);

export const registry = AdModules.DISTRICT.registry;

export const registier: AdRegistier = { base, registry };

const regBased: AdRegBased = {
  registier,
  joins: [
    {
      module: AdModules.CITY,
      registry: city_regy,
      alias: "city",
      filters: [{ linked: { name: "cidade", with: "codigo" } }],
    },
  ],
};

export class AdDistrict extends AdRegister {
  public constructor(module: AdModule, expect: AdExpect) {
    super(module, expect, regBased);
    this.addField(AdTools.newAdFieldString("cidade", "Cidade - Cód.", 6).putKey());
    this.addField(AdTools.newAdFieldString("city.nome", "Cidade - Nome", 60));
    this.addField(AdTools.newAdFieldString("codigo", "Código", 4).putKey());
    this.addField(AdTools.newAdFieldAtivo());
    this.addField(AdTools.newAdFieldString("nome", "Nome", 60));
    this.prepare();
  }
}
