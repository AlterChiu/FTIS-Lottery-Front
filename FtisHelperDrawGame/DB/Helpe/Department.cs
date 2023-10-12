using FtisHelperDrawGame.DB.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FtisHelperDrawGame.DB.Helpe
{
    public class Department
    {
        static object lockGetAllDepartment = new object();
        /// <summary>
        /// 取所有部門資料
        /// </summary>
        /// <param name="cachetimer">資料快取時間(毫秒),預設30分</param>
        /// <returns>IEnumerable<Department></returns>
        public static IEnumerable<F22cmmDep> GetAllDepartment(int cachetimer = Helper.longcacheduration)
        {
            //return Helper.GetAllDepartment(cachetimer);
            string key = "FTIS_ALL_Department";
            var alllDepartment = DouHelper.Misc.GetCache<IEnumerable<F22cmmDep>>(cachetimer, key);
            lock (lockGetAllDepartment)
            {
                if (alllDepartment == null)
                {
                    using (var cxt = Helper.CreateFtisT8ModelContext())
                    {
                        alllDepartment = cxt.F22cmmDep.ToArray();
                        DouHelper.Misc.AddCache(alllDepartment, key);
                    }
                }
            }
            return alllDepartment;
        }

        public static F22cmmDep GetDepartment(string DCode, int cachetimer = Helper.shortcacheduration)
        {
            //return Helper.GetDepartment(DCode, cachetimer);
            if (string.IsNullOrEmpty(DCode))
                return null;
            return GetAllDepartment(cachetimer).FirstOrDefault(m => m.DCode == DCode);
        }
    }
}
