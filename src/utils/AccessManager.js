/**
 * Утилита. Управляющий доступом
 */
export default class AccessManager {
  /**
   * Инициализировать управляющего доступом
   * @param {Object} config
   */
  constructor(config) {
    this.config = config
  }

  isLogged() {
    return Math.random() > 0.5
  }
}
