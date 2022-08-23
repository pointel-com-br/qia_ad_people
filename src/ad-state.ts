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

const base = QinTool.qinpel.chief.loadConfig(QinTool.qinpel.our.names.QinBaseSelected);

export const registry = AdModules.STATE.registry;

export const registier: AdRegistier = { base, registry };

export const register: AdRegBased = {
  registier,
  joins: [
    {
      module: AdModules.NATION,
      alias: "nation",
      filters: [{ linked: { name: "pais", with: "codigo" } }],
    },
  ],
};

export class AdState extends AdRegister {
  public constructor(module: AdModule, expect: AdExpect) {
    super(module, expect, register);
    this.addField(AdTools.newAdFieldString("pais", "País - Cód.", 4).putKey());
    this.addField(AdTools.newAdFieldString("nation.nome", "País - Nome", 60));
    this.addField(AdTools.newAdFieldString("codigo", "Código", 4).putKey());
    this.addField(AdTools.newAdFieldAtivo());
    this.addField(AdTools.newAdFieldString("nome", "Nome", 60));
    this.prepare();
  }
}
