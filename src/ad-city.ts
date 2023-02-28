import {
    AdExpect,
    AdModule,
    AdModules,
    AdRegBased,
    AdRegister,
    AdRegistier,
    AdTools
} from "admister";
import { Qine } from "qin_case";

const base = Qine.qinpel.chief.loadConfig(Qine.qinpel.our.names.QinBaseSelected);

export const registry = AdModules.CITY.registry;

export const registier: AdRegistier = { base, registry };

export const regBased: AdRegBased = {
  registier,
  joins: [
    {
      module: AdModules.NATION,
      alias: "nation",
      filters: [{ linked: { name: "pais", with: "codigo" } }],
    },
    {
      module: AdModules.STATE,
      alias: "state",
      filters: [
        { linked: { name: "pais", with: "pais" } },
        { linked: { name: "estado", with: "codigo" } },
      ],
    },
  ],
};

export class AdCity extends AdRegister {
  public constructor(module: AdModule, expect: AdExpect) {
    super(module, expect, regBased);
    this.addField(AdTools.newAdFieldString("codigo", "Código", 6).putKey());
    this.addField(AdTools.newAdFieldAtivo());
    this.addField(AdTools.newAdFieldString("pais", "País - Cód.", 4));
    this.addField(AdTools.newAdFieldString("nation.nome", "País - Nome", 60));
    this.addField(AdTools.newAdFieldString("estado", "Estado - Cód.", 4));
    this.addField(AdTools.newAdFieldString("state.nome", "Estado - Nome", 60));
    this.addField(AdTools.newAdFieldString("nome", "Nome", 60));
    this.prepare();
  }
}
