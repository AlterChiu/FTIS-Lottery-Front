using FtisHelperDrawGame.DB.Model;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FtisHelperDrawGame.DB
{
    public class Helper
    {
        internal const int fivehourcacheduration = 5 * 60 * 60 * 1000;
        internal const int longcacheduration = 30 * 60 * 1000;
        internal const int shortcacheduration = 5 * 60 * 1000;
        internal const int onemincacheduration = 1 * 60 * 1000;

        /// <summary>
        /// 建立DBContext-FtisModelContext
        /// </summary>
        /// <param name="printlog">是否debug視窗輸出T-SQL</param>
        /// <returns>FtisModelContext</returns>
        public static FtisT8ModelContext CreateFtisT8ModelContext(bool printlog = false)
        {
            return FtisHelperDrawGame.DB.FtisT8ModelContext.Create(printlog);
        }
    }
}
